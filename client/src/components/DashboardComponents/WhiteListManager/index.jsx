import "./whitelist.css"
import ButtonsGroup from "components/ButtonsGroup";
import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const WhiteListManager = () => {
  let context = useOutletContext();
  useEffect(() => {
    if(context && context?.setTabName){
      context.setTabName("Whitelist Manager")
    }
  },[]);
  return (
    <div>
      <ButtonsGroup
        links={[
          { name: "My Servers", path: "my-servers" },
          { name: "My WL", path: "my-wl" },
        ]}
      />
      <Outlet />
    </div>
  );
};

export default WhiteListManager;
