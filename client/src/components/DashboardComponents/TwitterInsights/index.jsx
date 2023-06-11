import ButtonsGroup from 'components/ButtonsGroup'
import { useEffect } from 'react';
import {Outlet, useOutletContext} from 'react-router-dom'

const TwitterInsights = () => {
  let context = useOutletContext();
  useEffect(() => {
    if(context && context?.setTabName){
      context.setTabName("Twitter Insights")
    }
  },[]);
  return (
    <div>       
       <div className="row j-c-b a-i-c">
       <ButtonsGroup
        links={[
          { name: "My Audits", path: "my-audits" },
          { name: "New Audits", path: "new-audits" },
        ]}
      />
        <div className="cs-select ms-md-end">
          <select name="" id="">
            <option value="1">last 24h</option>
            <option value="2">Last 3 days</option>
            <option value="3">Last 7 days</option>
            <option value="4">Last 30 days</option>
          </select>
        </div>
      </div>
        <Outlet/>
    </div>
  )
}

export default TwitterInsights
