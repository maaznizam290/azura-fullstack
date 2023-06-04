import NftCard from "components/NftCard";
import dragonz_img from "assets/images/arts/dragonz_img.jpg";
import de_ods_img from "assets/images/arts/de_ods_img.png";
import okayBears_img from "assets/images/arts/okayBears_img.png";
import communi3_img from "assets/images/arts/communi3_img.png";
import solana_monk_img from "assets/images/arts/solana_monk_img.png";
import blocksmith_labs_img from "assets/images/arts/blocksmith_labs_img.png";
// 
import { DoubleCircleIcon } from "utils/Icons";

const MyWL = () => {
  let data = [
    {
      img: dragonz_img,
      title: "Dragonz Labs",
      characteristics: [
        { title: "Discord", value: "250k" },
        { title: "Twitter", value: "150k" },
        {
          title: "Mint price",
          value: (
            <div className="d-flex a-i-c j-c-e">
              <DoubleCircleIcon style={{marginRight: "3px"}} /> 30
            </div>
          ),
        },
        { title: "Mint date", value: "19/06/2022" },
      ],
      socials: {
        discord: "/",
        twitter: "https://twitter.com/DragonzLabs",
        web: "/",
      },
    },
    {
      img: de_ods_img,
      title: "DeGods",
      characteristics: [
        { title: "Discord", value: "140k" },
        { title: "Twitter", value: "150k" },
        {
          title: "Mint price",
          value: (
            <div className="d-flex a-i-c j-c-e">
              <DoubleCircleIcon style={{marginRight: "3px"}} /> 30
            </div>
          ),
        },
        { title: "Mint date", value: "19/06/2022" },
      ],
      socials: {
        discord: "/",
        twitter: "https://twitter.com/DeGodsNFT",
        web: "https://www.degods.com/",
      },
    },
    {
      img: okayBears_img,
      title: "Okay Bears",
      characteristics: [
        { title: "Discord", value: "230k" },
        { title: "Twitter", value: "170k" },
        {
          title: "Mint price",
          value: (
            <div className="d-flex a-i-c j-c-e">
              <DoubleCircleIcon style={{marginRight: "3px"}} /> 30
            </div>
          ),
        },
        { title: "Mint date", value: "19/06/2022" },
      ],
      socials: {
        discord: "https://discord.gg/bearwithus",
        twitter: "https://twitter.com/okaybears",
        web: "https://okaybears.com",
      },
    },
    {
      img: communi3_img,
      title: " Communi3",
      characteristics: [
        { title: "Discord", value: "60k" },
        { title: "Twitter", value: "50k" },
        {
          title: "Mint price",
          value: (
            <div className="d-flex a-i-c j-c-e">
              <DoubleCircleIcon style={{marginRight: "3px"}} /> 30
            </div>
          ),
        },
        { title: "Mint date", value: "19/06/2022" },
      ],
      socials: {
        discord: "https://discord.gg/communi3",
        twitter: "https://twitter.com/communi3_io",
        web: "https://nft.communi3.io",
      },
    },
    {
      img: solana_monk_img,
      title: "Solana Monkey Business",
      characteristics: [
        { title: "Discord", value: "450k" },
        { title: "Twitter", value: "20k" },
        {
          title: "Mint price",
          value: (
            <div className="d-flex a-i-c j-c-e">
              <DoubleCircleIcon style={{marginRight: "3px"}} /> 30
            </div>
          ),
        },
        { title: "Mint date", value: "19/06/2022" },
      ],
      socials: {
        discord: "https://t.co/lUSpVRNXYR",
        twitter: "https://twitter.com/SolanaMBS",
        web: "https://solanamonkey.business",
      },
    },
    {
      img: blocksmith_labs_img,
      title: "Blocksmith Labs",
      characteristics: [
        { title: "Discord", value: "100k" },
        { title: "Twitter", value: "30k" },
        {
          title: "Mint price",
          value: (
            <div className="d-flex a-i-c j-c-e">
              <DoubleCircleIcon style={{marginRight: "3px"}} /> 30
            </div>
          ),
        },
        { title: "Mint date", value: "19/06/2022" },
      ],
      socials: {
        discord: "https://discord.gg/blocksmithlabs",
        twitter: "https://twitter.com/BlocksmithLabs",
        web: "https://mercury.blocksmithlabs.io",
      },
    },
  ];
  return (
    <div className="nft-cards-row row">
      {data?.map((v, i) => (
        <div key={i} className="col">
          <NftCard data={v} />
          <button className="btn nft-card-btn btn-primary">Confirmed</button>
        </div>
      ))}
    </div>
  );
};

export default MyWL;
