import { Routes, Route, } from "react-router-dom";
// pages
import NotFound from "pages/NotFound";
// dashboard main / layout
import Dashboard from "pages/Dashboard";

// dashboard welcome page
import Welcome from "components/DashboardComponents/Welcome";

// Collection tracker pages
import CollectionTracker from "components/DashboardComponents/CollectionTracker";
import WatchList from "components/DashboardComponents/CollectionTracker/WatchList";
import MyAlert from "components/DashboardComponents/CollectionTracker/MyAlert";
import NewAlert from "components/DashboardComponents/CollectionTracker/NewAlert";

// whitelist manager pages
import WhiteListManager from "components/DashboardComponents/WhiteListManager";
import MyServers from "components/DashboardComponents/WhiteListManager/MyServers";
import MyWL from "components/DashboardComponents/WhiteListManager/MyWL";
//  Twitter Insights pages
import TwitterInsights from "components/DashboardComponents/TwitterInsights";
import MyAudits from "components/DashboardComponents/TwitterInsights/MyAudits";
import NewAudits from "components/DashboardComponents/TwitterInsights/NewAudits";
//  Umbrella page
import Umbrella from "components/DashboardComponents/Umbrella";
//  secret Tools page
import SecretTool from "components/DashboardComponents/SecretTool";
import AzuraTools from "components/DashboardComponents/Welcome/AzuraTools";
import MyWatchList from "components/DashboardComponents/Welcome/MyWatchList";

// ****=========== App Router =================*****
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Dashboard />}>
        {/*========== main page ============ */}
        <Route path="/" element={<Welcome />}>
          <Route index exact element={<AzuraTools />} />
          <Route path="azura-tools" exact element={<AzuraTools />} />
          <Route path="my-watchlist" exact element={<MyWatchList />} />
        </Route>
        {/*========== collection tracker routes ==============*/}
        <Route path="collection-tracker" exact element={<CollectionTracker />}>
          <Route index exact element={<WatchList />} />
          <Route path="watch-list" exact element={<WatchList />} />
          <Route path="my-alerts" exact element={<MyAlert />} />
          <Route path="new-alert" exact element={<NewAlert />} />
        </Route>
        {/*========= whitelist manager routes =========*/}
        <Route path="whitelist-manager" exact element={<WhiteListManager />}>
          <Route index exact element={<MyServers />} />
          <Route path="my-servers" exact element={<MyServers />} />
          <Route path="my-wl" exact element={<MyWL />} />
        </Route>
        {/*========= Twitter insights routes =========*/}
        <Route path="twitter-insights" exact element={<TwitterInsights />}>
          <Route index exact element={<MyAudits />} />
          <Route path="my-audits" exact element={<MyAudits />} />
          <Route path="new-audits" exact element={<NewAudits />} />
        </Route>
        {/*========= Umbrella routes =========*/}
        <Route path="umbrella" exact element={<Umbrella />}></Route>
        {/*========= secret tools routes =========*/}
        <Route path="secret-tools" exact element={<SecretTool />}></Route>
      </Route>
      {/* ========= 404 ============ */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


export default AppRouter;
