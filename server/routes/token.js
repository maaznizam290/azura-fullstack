require("dotenv").config();
const axios = require("axios");

const token = {
  get: async (req, res) => {
    const { code } = req.body;

    axios({
      method: "post",
      url: "https://discord.com/api/oauth2/token",
      data: new URLSearchParams({
        client_id: `${process.env.CLIENT_ID}`,
        client_secret: `${process.env.CLIENT_SECRET}`,
        grant_type: "authorization_code",
        code: `${code}`,
        redirect_uri: `${process.env.CLIENT_REDIRECT}`,
        scope: "identify, guilds messages.read guilds.members.read", // The scopes you requested in the authorization URL
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(async (response) => {
        const token = response.data.access_token;
        const type = response.data.token_type;

        try {
          const userResponse = await axios.get(
            "https://discord.com/api/users/@me",
            {
              headers: {
                authorization: `${type} ${token}`,
              },
            }
          );

          const userData = userResponse.data;

          const guildsResponse = await axios.get(
            "https://discord.com/api/users/@me/guilds",
            {
              headers: {
                authorization: `${type} ${token}`,
              },
            }
          );

          const guilds = guildsResponse.data;

          const botGuildsResponse = await axios.get(
            "https://discord.com/api/users/@me/guilds",
            {
              headers: {
                authorization: `Bot ${process.env.TOKEN}`,
              },
            }
          );

          const botGuilds = botGuildsResponse.data;

          const commonGuilds = guilds.filter((g) =>
            botGuilds.find(
              (bg) => bg.id == g.id && (g.permissions & 0x08) === 0x08
            )
          );

          const tfas = [
            Math.floor(new Date() - 24 * 60 * 60 * 1000),
            Math.floor(new Date() - 3 * 24 * 60 * 60 * 1000),
            Math.floor(new Date() - 7 * 24 * 60 * 60 * 1000),
          ];

          const infoPromises = commonGuilds.map(async (g) => {
            //message counter
            const guildMessageCountPromises = commonGuilds.map(async (g) => {
              const responseChannels = await axios.get(
                `https://discord.com/api/guilds/${g.id}/channels`,
                {
                  headers: {
                    Authorization: `Bot ${process.env.TOKEN}`,
                  },
                }
              );

              const guildChannels = responseChannels.data;
              const msgCount = {
                day1: 0,
                day3: 0,
                day7: 0,
              };

              await Promise.all(
                guildChannels.map(async (c) => {
                  const url = `https://discord.com/api/channels/${c.id}/messages`;
                  const headers = {
                    Authorization: `Bot ${process.env.TOKEN}`,
                  };

                  try {
                    const response = await axios.get(url, { headers });
                    const messages = response.data;

                    messages.forEach((m) => {
                      if (!m.content) return;

                      const date = Math.floor(new Date(m.timestamp));

                      tfas.find((tfa, i) => {
                        if (date > tfa) {
                          if (i === 0) {
                            msgCount.day1 += 1;
                          }
                          if (i === 1) {
                            msgCount.day3 += 1;
                          }
                          if (i === 2) {
                            msgCount.day7 += 1;
                          }
                        }
                      });
                    });
                  } catch (error) {
                    console.error(error);
                  }
                })
              );

              return msgCount;
            });

            const messageCounter = await Promise.all(guildMessageCountPromises);
            //message counter ended

            //total members
            const headers = {
              Authorization: `Bot ${process.env.TOKEN}`,
            };

            let boosts = 0;

            axios
              .get(`https://discord.com/api/guilds/${g.id}`, { headers })
              .then((response) => {
                const guild = response.data;

                boosts = guild.approximate_member_count;
              })
              .catch((error) => {
                console.error(error);
              });

            return { guild: g.id, boosts, messageCounter };
          });

          const extras = await Promise.all(infoPromises);

          console.log(extras);

          res.json({
            status: true,
            token,
            type,
            userData,
            guilds: commonGuilds,
            extras,
          });
        } catch (error) {
          res.json({
            status: false,
            message: error.message,
          });
        }
      })
      .catch((error) => {
        res.json({
          status: false,
          message: "Invalid code",
        });
      });
  },
};

module.exports = token;
