import { useEffect } from 'react';
import {Outlet, useOutletContext} from 'react-router-dom'

const SecretTool = () => {
  let context = useOutletContext();
  useEffect(() => {
    if(context && context?.setTabName){
      context.setTabName("Secret Tool")
    }
  },[]);
  return (
    <div>Secret Tool
      <Outlet/>
    </div>
  )
}

export default SecretTool