import { Fade } from "react-awesome-reveal";
import axios from 'axios';
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const LoginComponent = () => {

  const handleLogin = async () => {
    // Request for login1111008271877283923
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1111008271877283923&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fumbrella&response_type=code&scope=identify%20guilds%20bot%20connections%20guilds.members.read';
  }
  return (
    <div className="welcome-box-main d-flex flex-col j-c-c a-i-c">
      <Fade direction="up" triggerOnce duration={950}>
        <div className="welcome-box text-center rounded border-gray bg-dark">
          <Fade direction="up" triggerOnce duration={900} delay={900}>
            <h3 className="text-uppercase">Welcome</h3>
          </Fade>
          <Fade direction="up" triggerOnce duration={950} delay={930}>
            <p>Welcome to Azura login to access the full platform</p>
          </Fade>
          <Fade direction="up" triggerOnce duration={1000} delay={960}>
            <button
              onClick={handleLogin}
              className="btn btn-primary mx-auto"

            >
              Login
            </button>
          </Fade>
          <Fade direction="up" triggerOnce duration={1100} delay={1000}>
            <span className="text-muted light-w">
              Note that you will need to hold one or more DGL NFT to access the
              platform
            </span>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default LoginComponent;
