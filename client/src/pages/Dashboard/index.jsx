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
import axios from "axios";
import Cookies from 'js-cookie';

// Dashboard layout wrapper
const Dashboard = () => {
  const [tabName, setTabName] = useState("Dashboard")
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const code = searchParams.get('code')

  const userCookie = Cookies.get('user')
  const guildCookie = Cookies.get('guilds')
  const extraCookie = Cookies.get('extras')
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'))
  const [tokenType, setTokenType] = useState(localStorage.getItem('tokenType'))
  const [userData, setUserData] = useState()
  const [guilds, setGuilds] = useState()
  const [extras, setExtras] = useState()
  const [loader, setLoader] = useState(false)

  // to set guilds and user info in cookies
  const updater = (data)=>{
    setAccessToken(data.token)
    setTokenType(data.type)
    setUserData(data.userData)
    setGuilds(data.guilds)
    setExtras(data.extras)
  }

  const setCookies = async ()=>{

      await setUserData(JSON.parse(userCookie))
      await setGuilds(JSON.parse(guildCookie))
      await setExtras(JSON.parse(extraCookie))

      setLoader(false)


  }


  useEffect(()=>{
    if ((userCookie && guildCookie && extraCookie)) {
      console.log(userCookie)
      setCookies()
    }else{

      setLoader(false)
    }
  }, [userCookie, guildCookie, extraCookie])


  useEffect(() => {

    if (accessToken && tokenType) {

      loginToAccount()

    }



  }, [accessToken])

  useEffect(() => {

    if (!code || accessToken) return;

    setLoader(true)
    axios.post('http://localhost:8000/token', { code })
      .then(response => {

        if (response.data.status) {

          updater(response.data)

          localStorage.setItem('accessToken', response.data.token)
          localStorage.setItem('tokenType', response.data.type)
          Cookies.set('user', JSON.stringify(response.data.userData))
          Cookies.set('guilds', JSON.stringify(response.data.guilds))
          Cookies.set('extras', JSON.stringify(response.data.extras))

          setLoader(false)


        } else {
          console.log(response.data.message)
          setLoader(false)
        }

      })
      .catch(error => {
        console.log(error.message)
        setLoader(false)
      })


  }, [code])



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
    loader ?

      // loader animation
      <div className="loading">
        <div className="circle-loader"></div>
      </div>

      :

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
              <DiceSearchIcon /> <span onClick={()=>{console.log(userData)}}> Collection Tracker</span>
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
                onClick={() => {

                  localStorage.removeItem('accessToken')
                  localStorage.removeItem('tokenType')
                  Cookies.remove('user');
                  Cookies.remove('guilds');
                  Cookies.remove('extras');

                  setAccessToken('')
                  setTokenType('')
                  setUserData(null)
                  setGuilds(null)
                  setExtras(null)
                  setIsAuthenticated(false)

                  window.location.href = '/';
                }}
              >
                <p>{userData.username + '#' + userData.discriminator}</p>
                <div className="avatar">
                  <img src={avatarImg} alt="Avatar_eXk321" />
                </div>
              </div>
            ) : (
              <div
                role="button"
                tabIndex="0"
                onClick={() => { window.location.href = 'http://localhost:8000/auth' }}
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
                setTabName: setTabName,
                info:{
                  userData,
                  guilds,
                  extras
                } 
              }} />
            </section>
          ) : (
            <LoginComponent loginToAccount={loginToAccount} />
          )}
        </main>
      </div>

  );
};

const CustomNav = ({ setTabName, path, rootPath, isNested, classes, children }) => {
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
