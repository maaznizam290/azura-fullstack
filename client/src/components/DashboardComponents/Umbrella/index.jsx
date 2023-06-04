import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'
import Table from "components/Table";
import {
  DiscordIcon,
  TwitterIcon,
  WebIcon,
} from "utils/Icons";
//
import art_1 from "assets/images/arts/1.jpg";
import art_2 from "assets/images/arts/2.jpg";
import art_3 from "assets/images/arts/3.jpg";
import art_4 from "assets/images/arts/4.jpg";
import art_5 from "assets/images/arts/5.jpg";
import art_6 from "assets/images/arts/6.jpg";
import art_7 from "assets/images/arts/7.jpg";

import { Line } from "react-chartjs-2";

// chart data config
const chartData = {
  type: "line",
  responsive: true,
  options: {
    tooltips: {
      enabled: false,
    },
  },
  labels: ["1day", "2day", "3day", "4day", "5day", "6day", "7day", "8day"],
  datasets: [
    {
      label: "Members",
      data: [0, 20, 10, 40, 32, 50, 60, 75],
      fill: true,
      backgroundColor: "rgba(139, 73, 241, 0.036)",
      borderColor: "#8B49F1",
      borderWidth: 2,
    },
    {
      label: "Online Members",
      data: [10, 15, 10, 28, 33, 15, 44, 49],
      fill: true,
      borderColor: "#70ED9D",
      borderWidth: 2,
    },
    {
      label: "Boost",
      data: [0, 30, 15, 28, 44, 39, 26, 19],
      fill: true,
      borderColor: "#F90000",
      borderWidth: 2,
    },
    {
      label: "Messages",
      data: [0, 10, 15, 20, 25, 40, 60, 88],
      fill: true,
      borderColor: "#1D26FF",
      borderWidth: 2,
    },
    {
      label: "Reactions",
      data: [50, 50, 49, 49, 54, 60, 75, 90],
      fill: true,
      borderColor: "#FFDB1D",
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
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
    xAxes: [
      {
        title: {
          display: false,
          text: 'label for X'
        },
        ticks: {
          beginAtZero: true,
          min: 1,
          max: 10,
          stepSize: [1],
          callback: function (value, x) {
            let ar = ["1 Aug", "5 Aug", "10 Aug", "15 Aug", "20 Aug", "26 Aug", "30 Aug", "5 Sep"];
            return ar[x];
          },
        },
      },
    ],
  },
};


const Umbrella = () => {
  let context = useOutletContext();
  useEffect(() => {
    if (context && context?.setTabName) {
      context.setTabName("umbrella ")
    }
  }, []);

  // columns data for table header
  const columns = [
    { name: "Collection" },
    { name: "Members" },
    { name: "Online Members" },
    { name: "Boosts" },
    { name: "Messages" },
    { name: "Reactions" },
    { name: "Links" },
  ];
  // body data for table
  const data = [
    {
      img: art_1,
      members: "10,501",
      online_members: "1,552",
      boosts: "52",
      messages: "18,679",
      reactions: "540",
      links: { discord: "/", twitter: "/", web: "/" },
    },
    {
      img: art_2,
      members: "25,802",
      online_members: "4,567",
      boosts: "4",
      messages: "98,980",
      reactions: "679",
      links: { discord: "/", twitter: "/", web: "/" },
    },
    {
      img: art_3,
      members: "5,231",
      online_members: "567",
      boosts: "567",
      messages: "1,020",
      reactions: "56",
      links: { discord: "/", twitter: "/", web: "/" },
    },
    {
      img: art_4,
      members: "7,351",
      online_members: "238",
      boosts: "38",
      messages: "10,501",
      reactions: "89",
      links: { discord: "/", twitter: "/", web: "/" },
    },
    {
      img: art_5,
      members: "125,752",
      online_members: "10,555",
      boosts: "55",
      messages: "2,987",
      reactions: "1,789",
      links: { discord: "/", twitter: "/", web: "/" },
    },
    {
      img: art_6,
      members: "752",
      online_members: "555",
      boosts: "50",
      messages: "356,923",
      reactions: "544",
      links: { discord: "/", twitter: "/", web: "/" },
    },
    {
      img: art_7,
      members: "5,752",
      online_members: "105",
      boosts: "65",
      messages: "3,569",
      reactions: "65",
      links: { discord: "/", twitter: "/", web: "/" },
    },
  ];

  // 
  const columnsForInsights = [
    { name: "Inspect" },
    { name: "Collection Name" },
    { name: "Total Members" },
    { name: "Total Boost" },
    { name: "Total Messages" },
    { name: "Total Reactions" },
  ];

  // data for insights
  const [dataForInsights, setInsightsData] = useState([
    {
      id: 0,
      inspect: false,
      collection_name: "DeGods",
      total_members: "128,345",
      total_boost: "18",
      total_msgs: "700k",
      total_reactions: "10K",
    },
    {
      id: 1,
      inspect: false,
      collection_name: "Okay Bears",
      total_members: "12,234",
      total_boost: "34",
      total_msgs: "900k",
      total_reactions: "20K",
    },
    {
      id: 2,
      inspect: false,
      collection_name: "Nightmare",
      total_members: "34,780",
      total_boost: "20",
      total_msgs: "35k",
      total_reactions: "3K",
    }
  ]);

  // handle checkbox event
  const handleInspectCheck = (e, id) => {
    let prev = dataForInsights;
    let index = prev.findIndex((v) => v.id === id);
    prev[index] = { ...prev[index], inspect: e.target.checked };
    setInsightsData(prev);
  };
  return (
    <div>
      {/*  */}
      <div className="row j-c-b a-i-c">
        <h5>Overview  &nbsp;</h5>
        <div className="cs-select ms-md-end">
          <select name="" id="">
            <option value="1">24 hours</option>
            <option value="2">7 days</option>
            <option value="3">3 days</option>
          </select>
        </div>
      </div>
      {/* table */}
      <Table columns={columns}>
        {data?.map((item, i) => (
          <tr key={i}>
            <td className="avatar-col">
              <div className="d-flex a-i-c w-100 j-c-s">
                <div className="avatar">
                  <img src={item.img} alt="" />
                </div>
              </div>
            </td>
            <td>
              <p>{item.members}</p>
            </td>
            <td>
              <p>{item.online_members}</p>
            </td>
            <td>
              <p>{item.boosts}</p>
            </td>
            <td>
              <p>{item.messages}</p>
            </td>
            <td>
              <p>{item.reactions}</p>
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
      <br />
      {/* review */}
      <div className="row j-c-b a-i-c">
        <h5>Review Insights &nbsp;</h5>
        <div className="cs-select ms-md-end">
          <select name="" id="">
            <option value="1">24 hours</option>
            <option value="2">7 days</option>
            <option value="3">3 days</option>
          </select>
        </div>
      </div>
      {/* graph */}
      <div className="chart-wrapper border-gray rounded">
        <div className="chart-inner">
          <Line data={chartData} options={chartOptions} />
        </div>
        {/* options */}
        <div className="row graph-checkbox-row checkboxes-row">
          <div className="checkbox-col">
            <label className="checkBox type-2" htmlFor={"mem"}>
              <input
                type="checkbox"
                id={"mem"}
              />
              <p>
                Members
              </p>
            </label>
          </div>
          <div className="checkbox-col">
            <label className="checkBox type-2" htmlFor={"on_mem"}>
              <input
                type="checkbox"
                id={"on_mem"}
              />
              <p>
                Online Members
              </p>
            </label>
          </div>
          <div className="checkbox-col">
            <label className="checkBox type-2" htmlFor={"boost_"}>
              <input
                type="checkbox"
                id={"boost_"}
              />
              <p>
                Boost
              </p>
            </label>
          </div>
          <div className="checkbox-col">
            <label className="checkBox type-2" htmlFor={"msgs"}>
              <input
                type="checkbox"
                id={"msgs"}
              />
              <p>
                Messages
              </p>
            </label>
          </div>
          <div className="checkbox-col">
            <label className="checkBox type-2" htmlFor={"react"}>
              <input
                type="checkbox"
                id={"react"}
              />
              <p>
                Reactions
              </p>
            </label>
          </div>

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
            <td>{item?.total_members}</td>
            <td>{item?.total_boost}</td>
            <td>{item?.total_msgs}</td>
            <td>{item?.total_reactions}</td>
          </tr>
        ))}
      </Table>
    </div>
  )
}

export default Umbrella