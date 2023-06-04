import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink, useOutletContext } from "react-router-dom";

const AzuraTools = () => {
  let context = useOutletContext();
  useEffect(() => {
    if(context && context?.setTabName){
      context.setTabName("Dashboard")
    }
  },[]);
  return (
    <>
      <Fade triggerOnce duration={2000}>
        <h4>Welcome to Azura</h4>
      </Fade>
      <Fade triggerOnce duration={2000}>
        <p className="light-w" style={{ margin: "12px 0" }}>
          A platform made by Dragonz Labs to bring back transparancy and trust
          in the NFT Space. You will have access to different tools that will
          help you make the best decisions.
        </p>
      </Fade>
      <Fade direction="up" triggerOnce duration={1250} delay={100}>
        <WelcomeMsgs
          data={{
            title: "Collection Tracker",
            desc: "Includes floor price tracker & volume tracker, set up your alert and don't ever miss your exit and entry points.",
            path: "/collection-tracker",
          }}
        />
      </Fade>
      <Fade direction="up" triggerOnce duration={1250} delay={150}>
        <WelcomeMsgs
          data={{
            title: "Whitelist Manager",
            desc: "Don't ever miss a WL Opportunity ever. Our whitelist Manager will check for you all your services and notifies you if you receive a WL role.",
            path: "/whitelist-manager",
          }}
        />
      </Fade>
      <Fade direction="up" triggerOnce duration={1250} delay={200}>
        <WelcomeMsgs
          data={{
            title: "Twitter Insights",
            desc: "Includes twitter mentions and bot tracker. Audit each project and track the project popularity to evaluate the community behind it.",
            path: "/twitter-insights",
          }}
        />
      </Fade>
      <Fade direction="up" triggerOnce duration={1250} delay={250}>
        <WelcomeMsgs
          data={{
            title: "Umbrella",
            desc: "An intuitive tracker to monitor Discord server’s activity and engagement. Umbrella will be installed on different servers to give you real time insights to evaluate a project community.",
            path: "/umbrella",
          }}
        />
      </Fade>
    </>
  );
};

// cards
const WelcomeMsgs = ({ data }) => {
  return (
    <div className="border-primary welcome-cards rounded d-flex a-i-c j-c-b">
      <div>
        <h5>{data?.title}</h5>
        <p className="light-w">{data?.desc}</p>
      </div>
      <div>
        <NavLink className="btn btn-primary d-flex a-i-c j-c-c" to={data?.path}>
          Start Now
        </NavLink>
      </div>
    </div>
  );
};
export default AzuraTools;
