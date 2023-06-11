import ButtonsGroup from "components/ButtonsGroup";
import { useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

const Welcome = () => {
  let context = useOutletContext();

  useEffect(() => {
    if(context && context?.setTabName){
      context.setTabName("Dashboard")
    }
  },[]);
  return (
    <>
    <div className="row j-c-c a-i-c">
        <ButtonsGroup
          links={[
            { name: "Azura Tools", path: "azura-tools" },
            { name: "My Watchlist", path: "my-watchlist" },
          ]}
        />
      </div>
    <Outlet/>
    </>
  );
};

export default Welcome;
