import Table from "components/Table";
import {
  BellIcon,
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

const WatchList = () => {
  // columns data for table header
  const columns = [
    { name: "Collection" },
    { name: "Supply", sort: true },
    { name: "Floor Price", sort: true },
    { name: "Volume", sort: true },
    { name: "Alert Now" },
    { name: "Links" },
  ];
  // body data for table
  const data = [
    {
      img: de_ods_img,
      name: "DeGods",
      supply: "10,000",
      price: "269",
      volume: "762,234",
      alert: false,
      links: { discord: "https://discord.gg/blocksmithlabs", twitter: "https://twitter.com/BlocksmithLabs", web: "https://mercury.blocksmithlabs.io" },
    },
    {
      img: blocksmith_labs_img,
      name: "Blocksmith Labs",
      supply: "4,400",
      price: "61.9",
      volume: "328,035",
      alert: false,
      links: { discord: "https://discord.gg/blocksmithlabs", twitter: "https://twitter.com/BlocksmithLabs", web: "https://mercury.blocksmithlabs.io" },
    },
    {
      img: solana_monk_img,
      name: "Solana Monkey",
      supply: "5,000",
      price: "190",
      volume: "1,148,470",
      alert: false,
      links: { discord: "https://t.co/lUSpVRNXYR", twitter: "https://twitter.com/SolanaMBS", web: "https://solanamonkey.business" },
    },
    {
      img: okayBears_img,
      name: "Okay Bears",
      supply: "10,000",
      price: 85,
      volume: "1,924,858",
      alert: false,
      links: { discord: "https://discord.gg/bearwithus", twitter: "https://twitter.com/okaybears", web: "https://okaybears.com" },
    }
    
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
          <td>{item.supply}</td>
          <td>
            <div className="d-flex table-price-o a-i-c j-c-c">
              <DoubleCircleIcon /> <span>{item.price}</span>
            </div>
          </td>
          <td>
          <div className="d-flex table-price-o a-i-c j-c-c">
              <DoubleCircleIcon /> <span>{item.volume}</span>
            </div>
          </td>
          <td>
            <BellIcon />
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

export default WatchList;
