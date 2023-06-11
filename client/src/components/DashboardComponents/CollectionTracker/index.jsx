// css
import "./collectionTracker.css";
// 
import ButtonsGroup from "components/ButtonsGroup";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import CollectionSlider from "components/CollectionSlider";
import { Fade } from "react-awesome-reveal";
import { useEffect } from "react";

const CollectionTracker = () => {
  const {pathname} = useLocation();

  let context = useOutletContext();
  useEffect(() => {
    if(context && context?.setTabName){
      context.setTabName("Collection Tracker")
    }
  },[]);

  // 
  if(pathname === "/collection-tracker/new-alert" || pathname ===  "/collection-tracker/new-alert/"){
    return  <Outlet /> 
  }
  return (
    <div>
      <div className="row j-c-b a-i-c">
        <h5>Trendy Collections : &nbsp;</h5>
        <div className="cs-select ms-md-end">
          <select name="" id="">
            <option value="1">Last 1 hour</option>
            <option value="2">Last 2 hour</option>
            <option value="3">Last 3 hour</option>
          </select>
        </div>
      </div>
      {/* carousel / slider  */}
      <div className="collections-slider-container">
        <Fade duration={1800} triggerOnce>
        <CollectionSlider/>

        </Fade>
      </div>
      {/*  */}
      <div className="row j-c-b a-i-c">
        <ButtonsGroup
          links={[
            { name: "Watchlist", path: "watch-list" },
            { name: "My Alerts", path: "my-alerts" },
            { name: "New Alerts", path: "new-alert" },
          ]}
        />
        <div className="cs-select ms-md-end">
          <select name="" id="">
            <option value="1">Floor price Alert</option>
            <option value="3">Volume Alert</option>
            <option value="2">All</option>
          </select>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default CollectionTracker;
