import Table from "components/Table";
import {
  HeartIcon,
  DiscordIcon,
  DoubleCircleIcon,
  TwitterIcon,
  WebIcon,
} from "utils/Icons";
//
import de_ods_img from "assets/images/arts/de_ods_img.png";
import okayBears_img from "assets/images/arts/okayBears_img.png";
import solana_monk_img from "assets/images/arts/solana_monk_img.png";
import blocksmith_labs_img from "assets/images/arts/blocksmith_labs_img.png";

const PastAlerts = () => {
  // columns data for table header
  const columns = [
    { name: "Collection" },
    { name: "Current FP", sort: true },
    { name: "FP alert", sort: true },
    { name: "Volume", sort: true },
    { name: "Watchlist" },
    { name: "Links" },
  ];
  // body data for table
  const data = [
    {
      img: de_ods_img,
      name: "DeGods",
      current_fp: "269",
      fp_alert: 250,
      volume: "762,234",
      watch_list: false,
      links: { discord: "https://discord.gg/dedao", twitter: "https://twitter.com/DeGodsNFT", web: "https://www.degods.com/" },
    },
    {
      img: blocksmith_labs_img,
      name: "Blocksmith Labs",
      current_fp: "61.9",
      fp_alert: 75,
      volume: "328,035",
      watch_list: false,
      links: { discord: "https://discord.gg/blocksmithlabs", twitter: "https://twitter.com/BlocksmithLabs", web: "https://mercury.blocksmithlabs.io" },
    },
    {
      img: solana_monk_img,
      name: "Solana Monkey",
      current_fp: "190",
      fp_alert: 130,
      volume: "1,148,470",
      watch_list: false,
      links: { discord: "https://t.co/lUSpVRNXYR", twitter: "https://twitter.com/SolanaMBS", web: "https://solanamonkey.business" },
    },
    {
      img: okayBears_img,
      name: "Okay Bears",
      current_fp: "85",
      fp_alert: 100,
      volume: "1,924,858",
      watch_list: false,
      links: { discord: "https://discord.gg/bearwithus", twitter: "https://twitter.com/okaybears", web: "https://okaybears.com" },
    },
  ];
  return (
    <Table columns={columns}>
      {data?.map((item, i) => (
        <tr key={i}>
          <td className="avatar-col">
            <div className="d-flex a-i-c w-100 j-c-s">
            <div className="avatar">
              <img src={item.img} alt="" />
            </div>
            <p>
              {item?.name}
            </p>
            </div>
          </td>
          <td>
          <div className="d-flex table-price-o a-i-c j-c-c">
              <DoubleCircleIcon /> <span>{item.current_fp}</span>
            </div>
          </td>
          <td>
            <div className="d-flex table-price-o a-i-c j-c-c">
              <DoubleCircleIcon /> <span>{item.fp_alert}</span>
            </div>
          </td>
          <td>
          <div className="d-flex table-price-o a-i-c j-c-c">
              <DoubleCircleIcon /> <span>{item.volume}</span>
            </div>
          </td>
          <td>
            <HeartIcon />
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
  );
};

export default PastAlerts;
