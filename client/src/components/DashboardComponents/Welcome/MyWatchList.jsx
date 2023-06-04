import Table from "components/Table";
import {
    DiscordIcon,
    DoubleCircleIcon,
    TwitterIcon,
    WebIcon,
} from "utils/Icons";
//
import art_1 from "assets/images/arts/1.jpg";
import art_2 from "assets/images/arts/2.jpg";
import art_3 from "assets/images/arts/3.jpg";
import art_4 from "assets/images/arts/4.jpg";
import art_5 from "assets/images/arts/5.jpg";


const MyWatchList = () => {
    // columns data for table header
    const columns = [
        { name: "Collection" },
        { name: "Floor Price" },
        { name: "Volume" },
        { name: "Discord Members" },
        { name: "Discord Reaction" },
        { name: "Twitter Mentions" },
        { name: "Links" },
    ];
    // body data for table
    const data = [
        {
            img: art_1,
            floor_price: "120",
            volume: "12,765",
            discord_members: "98,980",
            discord_reaction: "2900",
            twitter_mentions: "28,215",
            links: { discord: "/", twitter: "/", web: "/" },
        },
        {
            img: art_2,
            floor_price: "54",
            volume: "1,567",
            discord_members: "1,020",
            discord_reaction: "56",
            twitter_mentions: "355",
            links: { discord: "/", twitter: "/", web: "/" },
        },
        {
            img: art_3,
            floor_price: "12",
            volume: "678.90",
            discord_members: "2,987",
            discord_reaction: "43",
            twitter_mentions: "128",
            links: { discord: "/", twitter: "/", web: "/" },
        },
        {
            img: art_4,
            floor_price: "8",
            volume: "10,555",
            discord_members: "356,923",
            discord_reaction: "6,501",
            twitter_mentions: "87,501",
            links: { discord: "/", twitter: "/", web: "/" },
        },
        {
            img: art_5,
            floor_price: "14",
            volume: "555",
            discord_members: "6,923",
            discord_reaction: "9807",
            twitter_mentions: "24,987",
            links: { discord: "/", twitter: "/", web: "/" },
        },
    ];
    return (
        <>
            <div className="row j-c-b a-i-c" style={{ margin: "8px auto"}}>
                <h5>Select up to 5 variables  &nbsp;</h5>
                <div className="cs-select ms-md-end">
                    <select name="" id="">
                        <option value="1">24 hours</option>
                        <option value="2">7 days</option>
                        <option value="3">3 days</option>
                    </select>
                </div>
            </div>
            {/* options */}
            <div className="row checkboxes-row">
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"supply"}>
                        <input
                            type="checkbox"
                            id={"supply"}
                        />
                        <p>
                            Supply
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"volume"}>
                        <input
                            type="checkbox"
                            id={"volume"}
                        />
                        <p>
                            Volume
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"discord_mem"}>
                        <input
                            type="checkbox"
                            id={"discord_mem"}
                        />
                        <p>
                            Discord Members
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"total_boost"}>
                        <input
                            type="checkbox"
                            id={"total_boost"}
                        />
                        <p>
                            Total Boost
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"discord_react"}>
                        <input
                            type="checkbox"
                            id={"discord_react"}
                        />
                        <p>
                            Discord Reactions
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"floor_p_alert"}>
                        <input
                            type="checkbox"
                            id={"floor_p_alert"}
                        />
                        <p>
                            Floor Price Alerts
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"floor_p"}>
                        <input
                            type="checkbox"
                            id={"floor_p"}
                        />
                        <p>
                            Floor Price
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"twitter_followers"}>
                        <input
                            type="checkbox"
                            id={"twitter_followers"}
                        />
                        <p>
                        Twitter Followers
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"discord_on_mem"}>
                        <input
                            type="checkbox"
                            id={"discord_on_mem"}
                        />
                        <p>
                        Discord Online Members
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"discord_msgs"}>
                        <input
                            type="checkbox"
                            id={"discord_msgs"}
                        />
                        <p>
                            Discord Messages
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"twitter_men"}>
                        <input
                            type="checkbox"
                            id={"twitter_men"}
                        />
                        <p>
                            Twitter Mentions
                        </p>
                    </label>
                </div>
                <div className="checkbox-col">
                    <label className="checkBox type-2" htmlFor={"vol_alert"}>
                        <input
                            type="checkbox"
                            id={"vol_alert"}
                        />
                        <p>
                            Volume Alerts
                        </p>
                    </label>
                </div>
            </div>
            {/* table */}
            <Table columns={columns}>
                {data?.map((item, i) => (
                    <tr key={i}>
                        <td className="avatar-col">
                            <div className="d-flex a-i-c w-100 j-c-s">
                                <div className="avatar">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="d-flex table-price-o a-i-c j-c-c">
                                <DoubleCircleIcon /> <span>{item.floor_price}</span>
                            </div>
                        </td>
                        <td>
                            <p>{item.volume}</p>
                        </td>
                        <td>
                            <p>{item.discord_members}</p>
                        </td>
                        <td>
                            <p>{item.discord_reaction}</p>
                        </td>
                        <td>
                            <p>{item.twitter_mentions}</p>
                        </td>
                        <td>
                            <div className="d-flex table-socials-wrapper w-100 a-i-c j-c-c">
                                {item?.links?.discord && (
                                    <a href={item?.links?.discord} target="_blank" rel="noopener noreferrer">
                                        <DiscordIcon />
                                    </a>
                                )}
                                {item?.links?.twitter && (
                                    <a href={item?.links?.twitter} target="_blank" rel="noopener noreferrer">
                                        <TwitterIcon />
                                    </a>
                                )}
                                {item?.links?.web && (
                                    <a href={item?.links?.web} target="_blank" rel="noopener noreferrer">
                                        <WebIcon />
                                    </a>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
            </Table>
        </>
    )
};

export default MyWatchList;