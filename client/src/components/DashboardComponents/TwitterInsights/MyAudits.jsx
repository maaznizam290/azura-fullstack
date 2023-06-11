import { useState } from "react";
// table
import Table from "components/Table";
import { ArrowDownIcon, ArrowUpIcon, DiscordIcon, TwitterFilledIcon, TwitterIcon, WebIcon } from "utils/Icons";
// images
import dragonz_img from "assets/images/arts/dragonz_img.jpg";
import okayBears_img from "assets/images/arts/okayBears_img.png";
import primates_img from "assets/images/arts/primates_img.png";
import vandal_city_img from "assets/images/arts/vandal_city_img.png";


import { Line } from "react-chartjs-2";

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

// ================
const PastAudits = () => {
  // columns data for table header
  // for table 2
  const columnsForInsights = [
    { name: "Inspect" },
    { name: "Collection Name" },
    { name: "Creation date" },
    { name: "Followers" },
    { name: "Bot Count" },
    { name: "Mentions Count" },
  ];
  // for table 1
  const columns = [
    { name: "Collection" },
    { name: "Followers" },
    { name: "Total Bot count" },
    { name: "Bot Variation" },
    { name: "Total Mentions" },
    { name: "Mentions Variation" },
    { name: "Twitter" },
  ];
  // body data for table 1
  const data = [
    {
      img: okayBears_img,
      name: "Okay Bears",
      followers: "139K",
      total_bot: "11k",
      bot_var: "15%",
      total_mentions: "@5k",
      mention_var: "20%",
      bot_up: false,
      mention_up: true,
      links: {
        twitter: "https://twitter.com/okaybears",
      },
    },
    {
      img: dragonz_img,
      name: "Dragonz Labs",
      followers: "89k",
      total_bot: "1k",
      bot_var: "30%",
      total_mentions: "@10k",
      mention_var: "38%",
      bot_up: false,
      mention_up: true,
      links: {
        twitter: "https://twitter.com/DragonzLabs",
      },
    },
    {
      img: primates_img,
      name: "Primates",
      followers: "255k",
      total_bot: "190k",
      bot_var: "20%",
      total_mentions: "@900",
      mention_var: "38%",
      bot_up: true,
      mention_up: false,
      links: {
        twitter: "https://twitter.com/Primatesnft",
      },
    },
    {
      img: vandal_city_img,
      name: "Vandal City",
      followers: "150k",
      total_bot: "87k",
      bot_var: "20%",
      total_mentions: "@200",
      mention_var: "69%",
      bot_up: true,
      mention_up: false,
      links: {
        twitter: "https://twitter.com/VandalCityCorp",
      },
    },
  ];

  // data for insights
  const [dataForInsights, setInsightsData] = useState([
    {
      id: 0,
      inspect: false,
      collection_name: "DeGods",
      creation_date: "22.02.2022",
      followers: "150K",
      bot_count: "10k",
      mentions: "12K",
    },
    {
      id: 1,
      inspect: false,
      collection_name: "Okay Bears",
      creation_date: "15.06.2021",
      followers: "10K",
      bot_count: "3k",
      mentions: "1.2K",
    },
    {
      id: 2,
      inspect: false,
      collection_name: "Dragonz Labs",
      creation_date: "22.02.2022",
      followers: "50K",
      bot_count: "1k",
      mentions: "20K",
    },
    {
      id: 3,
      inspect: false,
      collection_name: "Primates",
      creation_date: "02.04.2022",
      followers: "255K",
      bot_count: "190k",
      mentions: "20K",
    },
    {
      id: 4,
      inspect: false,
      collection_name: "Vandal City",
      creation_date: "09.04.2022",
      followers: "150K",
      bot_count: "87k",
      mentions: "17K",
    },
  ]);

  // handle checkbox event
  const handleInspectCheck = (e, id) => {
    let prev = dataForInsights;
    let index = prev.findIndex((v) => v.id === id);
    prev[index] = { ...prev[index], inspect: e.target.checked };
    setInsightsData(prev);
  };
  return (
    <>
      <Table columns={columns}>
        {data?.map((item, i) => (
          <tr key={i}>
            <td className="avatar-col">
              <div className="d-flex a-i-c w-100 j-c-s">
                <div className="avatar">
                  <img src={item.img} alt="" />
                </div>
                <p>{item?.name}</p>
              </div>
            </td>
            <td>
              <div className="d-flex table-price-o a-i-c j-c-c">
                <TwitterFilledIcon /> <span>{item.followers}</span>
              </div>
            </td>
            <td>
              <div className="d-flex table-price-o a-i-c j-c-c">
                <span>{item.total_bot}</span>
              </div>
            </td>
            <td>
              <div className="d-flex table-price-o a-i-c j-c-c">
                {item?.bot_up ? <ArrowUpIcon /> : <ArrowDownIcon />}{" "}
                <span>{item.bot_var}</span>
              </div>
            </td>
            <td>
              <div className="d-flex table-price-o a-i-c j-c-c">
                <span>{item.total_mentions}</span>
              </div>
            </td>
            <td>
              <div className="d-flex table-price-o a-i-c j-c-c">
                {item?.mention_up ? <ArrowUpIcon /> : <ArrowDownIcon />}{" "}
                <span>{item.mention_var}</span>
              </div>
            </td>
            <td>
            <div className="d-flex table-socials-wrapper w-100 a-i-c j-c-c">
              {item?.links?.discord && (
                <a href={item?.links?.discord} target="_blank" rel="noopener noreferrer">
                  <DiscordIcon />
                </a>
              )}
              {item?.links?.twitter && (
                <a href={item?.links?.twitter} target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
              )}
              {item?.links?.web && (
                <a href={item?.links?.web} target="_blank" rel="noopener noreferrer">
                  <WebIcon />
                </a>
              )}
            </div>
          </td>
          </tr>
        ))}
      </Table>
      <div className="row j-c-e a-i-c" style={{ margin: "7px auto" }}>
        <div className="cs-select ms-md-end">
          <select name="" id="">
            <option value="1">last 24h</option>
            <option value="1">Last 3 days</option>
            <option value="1">Last 7 days</option>
            <option value="1">Last 30 days</option>
          </select>
        </div>
      </div>
      {/* graph */}
      <div className="chart-wrapper border-gray rounded">
        <div className="chart-inner">
          <p>Amount</p>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      {/* insights table  */}
      <Table columns={columnsForInsights}>
        {dataForInsights?.map((item, i) => (
          <tr key={i}>
            <td className="avatar-col">
              <label className="checkBox" htmlFor={"inspect" + item.id}>
                <input
                  type="checkbox"
                  id={"inspect" + item.id}
                  value={item?.inspect}
                  onChange={(e) => handleInspectCheck(e, item?.id)}
                />
              </label>
            </td>
            <td>{item?.collection_name}</td>
            <td>{item?.creation_date}</td>
            <td>{item?.followers}</td>
            <td>{item?.bot_count}</td>
            <td>{item?.mentions}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};

export default PastAudits;
