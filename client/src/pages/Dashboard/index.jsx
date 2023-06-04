import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import {
  AccountOutlineCircle,
  UmbrellaIcon,
  DashboardIcon,
  DiceSearchIcon,
  DiscordIcon,
  PaperIcon,
  SecurityIcon,
  TwitterFilledIcon,
  TwitterIcon,
  WebIcon,
} from "utils/Icons";
import logo from "assets/images/web/logo.png";
import logo_sm from "assets/images/web/logo_sm.png";
import avatarImg from "assets/images/others/avatar.png";
import { useEffect, useState } from "react";
import LoginComponent from "components/LoginComponent";
import { Fade } from "react-awesome-reveal";

// Dashboard layout wrapper
const Dashboard = () => {
  const [tabName, setTabName] = useState("Dashboard")
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //
  useEffect(() => {
    let element = document.querySelector(".pages-wrapper");
    element?.scrollTo(0, 0);
  }, [pathname]);

  // login function
  const loginToAccount = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="dashboard-page d-flex">
      <aside className="sidebar d-flex flex-col">
        <div className="aside-logo w-100 mx-auto text-center">
          <Fade triggerOnce duration={900}>
            <img src={logo} alt="Azura" />
          </Fade>
          <img className="mobile_logo" src={logo_sm} alt="Azura" />
        </div>
        <nav className="aside-navbar  text-center">
          {/*  */}
          <CustomNav setTabName={setTabName} classes="aside-nav-item" path="/azura-tools" rootPath="Dashboard">
            <DashboardIcon /> <span> Dashboard</span>
          </CustomNav>
          {/*  */}
          <CustomNav
            classes="aside-nav-item"
            rootPath="/collection-tracker"
            path="/collection-tracker/watch-list"
            isNested={true}
            setTabName={setTabName}
          >
            <DiceSearchIcon /> <span> Collection Tracker</span>
          </CustomNav>
          {/*  */}
          <CustomNav
            classes="aside-nav-item"
            isNested={true}
            path="/whitelist-manager/my-servers"
            rootPath="/whitelist-manager"
            setTabName={setTabName}
          >
            <PaperIcon /> <span> Whitelist Manager</span>
          </CustomNav>
          {/*  */}
          <CustomNav
            classes="aside-nav-item"
            isNested={true}
            path="/twitter-insights/my-audits"
            rootPath="/twitter-insights"
            setTabName={setTabName}
          >
            <TwitterIcon /> <span> Twitter Insights</span>
          </CustomNav>
          {/*  */}
          <CustomNav setTabName={setTabName} classes="aside-nav-item" path="/umbrella">
            <UmbrellaIcon /> <span> Umbrella </span>
          </CustomNav>
          {/*  */}
          <CustomNav setTabName={setTabName} classes="aside-nav-item" path="/secret-tools">
            <SecurityIcon /> <span> Secret Tool</span>
          </CustomNav>
          <div className="aside-footer">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
            <div className="aside-socials d-flex a-i-c">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <TwitterFilledIcon />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <DiscordIcon />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <WebIcon />
              </a>
            </div>
            <div className="aside-copy-rights">
              &copy; <span>{new Date().getFullYear()} Dragonz Labs</span>
            </div>
          </div>
        </nav>
      </aside>
      <main className="dashboard-main d-flex flex-col">
        <header className="header d-flex j-c-b a-i-c">
          <div className="header-tab-name">
            {isAuthenticated && <h5> {tabName} </h5>}
          </div>
          {isAuthenticated ? (
            <div
              role="button"
              tabIndex="0"
              className="header-login rounded cursor-pointer d-flex j-c-e a-i-c"
            >
              <p>Avatar_eXk321</p>
              <div className="avatar">
                <img src={avatarImg} alt="Avatar_eXk321" />
              </div>
            </div>
          ) : (
            <div
              role="button"
              tabIndex="0"
              onClick={loginToAccount}
              className="header-login rounded cursor-pointer d-flex j-c-e a-i-c"
            >
              <p>Login</p>
              <AccountOutlineCircle />
            </div>
          )}
        </header>
        {isAuthenticated ? (
          <section className="pages-wrapper">
            <Outlet context={{
              setTabName:setTabName
            }}/>
          </section>
        ) : (
          <LoginComponent loginToAccount={loginToAccount} />
        )}
      </main>
    </div>
  );
};

const CustomNav = ({ setTabName,path, rootPath, isNested, classes, children }) => {
  const { pathname } = useLocation();
  //
  const checkNested = () => {
    if (isNested) {
      return pathname.includes(rootPath || path);
    }
    return false;
  };

  // 
  // const formateTabNames = () => {
  //   return rootPath?.replaceAll("/"," ")?.replaceAll("-"," ") || path?.replaceAll("/"," ")?.replaceAll("-"," ")
  // };
  return (
    <NavLink
      className={(isActive) =>
        (classes || " ") +
        (isActive.isActive || checkNested() ? " bg-primary" : " ")
      }
      to={path}
      >
      {children}
    </NavLink>
  );
};
export default Dashboard;
