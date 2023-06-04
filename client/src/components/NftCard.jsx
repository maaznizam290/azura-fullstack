import React from "react";
import { DiscordIcon, TwitterIcon, WebIcon } from "utils/Icons";

const NftCard = ({ data }) => {
  return (
    <div className="nft-card border-gray rounded">
      <div className="nft-card-img">
        <img src={data?.img} alt="" />
      </div>
      <h5 className="text-center nft-card-title">{data?.title}</h5>
      <div className="nft-card-list-wrapper">
      {data?.characteristics?.map((item, i) => (
        <div key={i} className="nft-card-list d-flex j-c-b a-i-c">
          <p>{item?.title}</p>
          <span>{item?.value}</span>
        </div>
      ))}

      </div>
      <div className="cs-hr"></div>
      <div className="nft-card-socials d-flex a-i-c j-c-c">
        {data?.socials?.discord && (
          <a
            href={data?.socials?.discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon />
          </a>
        )}
        {data?.socials?.twitter && (
          <a
            href={data?.socials?.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        )}
        {data?.socials?.web && (
          <a href={data?.socials?.web} target="_blank" rel="noopener noreferrer">
            <WebIcon />
          </a>
        )}
      </div>
    </div>
  );
};

export default NftCard;
