// css
import "./twitterInsights.css";
//
import { useRef, useState } from "react";
//
import art1 from "assets/images/arts/1.jpg";
//
import { Line } from "react-chartjs-2";
// ======
const NewAudits = () => {
  const cardElem = useRef(null);
  //
  const [linkInput, setLinkInput] = useState("");
  const [error, setError] = useState("");
  //

 
// chart data config
const chartData = {
  type: "line",

  options: {
    tooltips: {
      enabled: false,
    },
  },
  labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
  datasets: [
    {
      label: "Bot Count",
      data: [0, 20, 10, 40, 32, 50, 60, 75],
      fill: true,
      backgroundColor: "rgba(139, 73, 241, 0.036)",
      borderColor: "#8B49F1",
      borderWidth: 2,
    },
    {
      label: "Mentions Count",
      data: [0, 15, 24, 20, 16, 33, 44, 52],
      fill: true,
      borderColor: "#70ED9D",
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  scales: {
    yAxes: [
      {
        title: {
          display: false,
          text: 'label for Y'
        },
        ticks: {
          beginAtZero: false,
          min: 1,
          max: 100,
          stepSize: [25],
          callback: function (value, x) {
            let ar = ["1", "10", "30", "50", "100"];
            return ar.reverse()[x] + "k";
          },
        },
      },
    ],
  },
};

  //
  const [insightsDetails, setInsightsDetails] = useState({
    avail: false,
    img: art1,
    twitter_handle: "@dragonzlabs",
    twitter_followers: "150k",
    twitter_bots: "10k",
    twitter_mentions: "12.5k",
    creation_date: "12.02.2022",
  });

  // check url is valid or not
  function isTwitterHandle(handle) {
    if (
      handle.match(
        /^((?:http:\/\/)?|(?:https:\/\/)?)?(?:www\.)?twitter\.com\/(\w+)$/i
      ) ||
      handle.match(/^@?(\w+)$/)
    )
      return true;
    return false;
  }

  // on submit
  const getInsights = (e) => {
    e.preventDefault();
    if (linkInput.trim()?.length > 0 && isTwitterHandle(linkInput)) {
      setError("");
      setInsightsDetails({
        ...insightsDetails,
        avail: true,
      });
      setTimeout(() => {
        if (cardElem?.current) {
          cardElem.current.scrollIntoView(true);
        }
      }, 100);
    } else {
      setError("Invalid Url");
    }
  };
  //
  return (
    <div>
      {/* form */}
      <form onSubmit={getInsights}>
        <div className="new-audits-box text-center rounded border-gray">
          <p>Audit your desired Twitter NFT Project !</p>
          <input
            className="border-gray rounded"
            type="url"
            placeholder="Twitter Link"
            required
            onChange={(e) => {
              setLinkInput(e.target.value);
              setError("");
            }}
            value={linkInput}
          />
        </div>
        <div className="mx-auto error-msg text-center">
          <p>{error}</p>
        </div>
        <button type="submit" className="btn btn-primary twitter-audit-btn">
          Audit Now
        </button>
      </form>
      {insightsDetails?.avail ? (
        <>
          {/* insights result data card  */}
          <div
            ref={cardElem}
            className="twitter-insight-result-card rounded border-gray d-flex"
          >
            <div className="twitter-insight-result-card-left">
              <img src={insightsDetails?.img} alt="" />
            </div>
            <div className="twitter-insight-result-card-right">
              <div className="twitter-insight-result-card-list d-flex a-i-c">
                <p>Twitter Handle</p>
                <span>{insightsDetails?.twitter_handle}</span>
              </div>
              <div className="twitter-insight-result-card-list d-flex a-i-c">
                <p>Twitter Followers</p>
                <span>{insightsDetails?.twitter_followers}</span>
              </div>
              <div className="twitter-insight-result-card-list d-flex a-i-c">
                <p>Twitter Bots</p>
                <span>{insightsDetails?.twitter_bots}</span>
              </div>
              <div className="twitter-insight-result-card-list d-flex a-i-c">
                <p>Twitter Mentions</p>
                <span>{insightsDetails?.twitter_mentions}</span>
              </div>
              <div className="twitter-insight-result-card-list d-flex a-i-c">
                <p>Creation Date</p>
                <span>{insightsDetails?.creation_date}</span>
              </div>
            </div>
          </div>
          <div
            className="row j-c-b a-i-c"
            style={{ margin: "12px auto 3px auto" }}
          >
            <h5>Twitter Insights:</h5>
            <div className="cs-select ms-md-end">
              <select name="" id="">
                <option value="1">Last 1 week</option>
                <option value="1">Last 2 week</option>
                <option value="1">Last 3 week</option>
                <option value="1">Last 4 week</option>
              </select>
            </div>
          </div>
          <div className="chart-wrapper border-gray rounded">
            <div className="chart-inner">
              <p>
              Amount
              </p>
              <Line data={chartData} options={chartOptions}/>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NewAudits;
