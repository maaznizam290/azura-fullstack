import ButtonsGroup from "components/ButtonsGroup";
import avatarImg from "assets/images/arts/1.jpg";
import { DoubleCircleIcon } from "utils/Icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

//
const NewAlert = () => {
  const [alertType, setAlertType] = useState({
    type: "Floor Price Alerts",
    values: ["91", "100", "88", "95"],
  });

  // handle on change alert type
  const handleTypeChange = (e) => {
    let { value } = e.target;
    let arr = [];

    if (value === "Floor Price Alerts") {
      arr = ["91", "100", "88", "95"];
    } else {
      arr = ["91","12,298", "11,900"];
    }
    setAlertType({
      type: value,
      values: arr,
    });
  };
  return (
    <div className="new-alert-page d-flex flex-col a-i-c j-c-c">
      <Fade duration={1800} triggerOnce>
        <div className="row j-c-c a-i-c">
          <ButtonsGroup
            links={[
              { name: "Watchlist", path: "/collection-tracker/watch-list" },
              { name: "My Alerts", path: "/collection-tracker/my-alerts" },
              { name: "New Alerts", path: "/collection-tracker/new-alert" },
            ]}
          />
        </div>
      </Fade>
      <div className="w-100">
      <Fade duration={2200} triggerOnce>
        <div className="new-alert-box rounded border-gray">
          <div className="new-alert-head bg-primary d-flex j-c-b a-i-c">
            <h5>Set your Floor price alert</h5>
            <div className="cs-select">
              <select onChange={handleTypeChange} name="" id="">
                <option value="Floor Price Alerts">Floor price Alert</option>
                <option value="Volume alert">Volume traded alert</option>
              </select>
            </div>
          </div>
          <div className="new-alert-avatar-wrapper text-center">
            <div className="avatar">
              <img src={avatarImg} alt="" />
            </div>
            <p className="w-100 text-center">Dragonz Labs</p>
          </div>
          <div className="new-alert-body">
            <div className="d-flex character-box j-c-b a-i-c">
              <h6>Collection name</h6>
              <span>Dragonz Labs</span>
            </div>
            <div className="d-flex character-box j-c-b a-i-c">
              <h6>Current Floor Price</h6>
              <span className="d-flex j-c-e a-i-c">
                {alertType.values[0]}
                <DoubleCircleIcon />
              </span>
            </div>
            <div className="d-flex character-box j-c-b a-i-c">
              <h6>{alertType.type}</h6>
              <span className="d-flex j-c-e a-i-c">
                <span
                  className="d-flex j-c-c a-i-c"
                  style={{ padding: "0 7px" }}
                >
                  {alertType.values[1]}
                  <DoubleCircleIcon />
                </span>
                <span
                  className="d-flex j-c-c a-i-c"
                  style={{ padding: alertType.values[3] ? "0 7px" : "" }}
                >
                  {alertType.values[2]}
                  <DoubleCircleIcon />
                </span>
                {alertType.values[3] &&
                <span className="d-flex j-c-c a-i-c">
                  {alertType.values[3]}
                  <DoubleCircleIcon />
                </span>}
              </span>
            </div>
            <div className="cs-hr"></div>
            <div className="d-flex  character-box j-c-b a-i-c">
              <h6>Collection name</h6>
              <div className="cs-select type-2">
                <select name="" id="">
                  <option value="">Choose a collection</option>
                </select>
              </div>
            </div>
            <div className="d-flex character-box j-c-b a-i-c">
              <h6>Current Floor Price</h6>
            </div>
            <div className="d-flex character-box j-c-b a-i-c">
              <h6>Floor Price Alerts</h6>
            </div>
          </div>
        </div>
      </Fade>

      </div>
      <NavLink
        className="btn btn-primary rounded mx-auto d-flex a-i-c j-c-c twitter-audit-btn"
        to="/collection-tracker/my-alerts"
      >
        Set alert
      </NavLink>
    </div>
  );
};

export default NewAlert;
