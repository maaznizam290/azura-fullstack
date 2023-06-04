import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
// images
import dragonz_img from "assets/images/arts/dragonz_img.jpg";
import de_ods_img from "assets/images/arts/de_ods_img.png";
import okayBears_img from "assets/images/arts/okayBears_img.png";
import communi3_img from "assets/images/arts/communi3_img.png";
import solana_monk_img from "assets/images/arts/solana_monk_img.png";
import blocksmith_labs_img from "assets/images/arts/blocksmith_labs_img.png";
import fff_img from "assets/images/arts/fff_img.png";
import degenerate_ape_img from "assets/images/arts/degenerate_ape_img.png";
import catalina_img from "assets/images/arts/catalina_img.png";

// import art10 from "assets/images/arts/10.jpg";
// import art11 from "assets/images/arts/11.jpg";
// import art12 from "assets/images/arts/12.jpg";
// import art13 from "assets/images/arts/13.jpg";
// import art14 from "assets/images/arts/14.jpg";
// 
import { DiscordIcon, TwitterIcon, WebIcon } from "utils/Icons";

//
SwiperCore.use([Autoplay,Navigation]);

//
const CollectionSlider = () => {
  const collectionList = [
    { img: dragonz_img, title: "Dragonz Labs", discord: "/", twitter: "https://twitter.com/DragonzLabs", web: "/" },
    { img: de_ods_img, title: "DeGods", discord: "https://discord.gg/dedao", twitter: "https://twitter.com/DeGodsNFT", web: "https://www.degods.com/" },
    { img: okayBears_img, title: "Okay Bears", discord: "https://discord.gg/bearwithus", twitter: " https://twitter.com/okaybears", web: "https://okaybears.com" },
    { img: communi3_img, title: "Communi3", discord: "https://discord.gg/communi3", twitter: "https://twitter.com/communi3_io", web: "https://nft.communi3.io" },
    { img: solana_monk_img, title: "Solana Monkey Business", discord: "https://t.co/lUSpVRNXYR", twitter: "https://twitter.com/SolanaMBS", web: "https://solanamonkey.business" },
    { img: blocksmith_labs_img, title: "Blocksmith Labs", discord: "https://discord.gg/blocksmithlabs", twitter: "https://twitter.com/BlocksmithLabs", web: "https://mercury.blocksmithlabs.io" },
    { img: fff_img, title: "Famous Fox Federation", discord: "https://discord.gg/famousfoxes", twitter: "https://twitter.com/FamousFoxFed", web: "https://famousfoxes.com" },
    { img: degenerate_ape_img, title: "Degenerate Ape Academy", discord: "https://discord.com/invite/degendaoo", twitter: "https://twitter.com/DegenApeAcademy", web: "https://degenape.academy" },
    { img: catalina_img, title: "The Catalina Whale Mixer", discord: "https://discord.com/invite/catalinawhales", twitter: "https://twitter.com/catalinawhales", web: "https://www.catalinawhalemixer.com/" },
    // { img: art10, title: "", discord: "/", twitter: "/", web: "/" },
    // { img: art11, title: "", discord: "/", twitter: "/", web: "/" },
    // { img: art12, title: "", discord: "/", twitter: "/", web: "/" },
    // { img: art13, title: "", discord: "/", twitter: "/", web: "/" },
    // { img: art14, title: "", discord: "/", twitter: "/", web: "/" },
  ];
  return (
    <Swiper
    //   autoplay={{ disableOnInteraction: false, delay: 1500 }}
      className="cl-slider-wrapper"
      navigation
      slidesPerView={5}
      loop={false}
      spaceBetween={0}
      breakpoints={{
        190: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
       
        1000: {
          slidesPerView: 5,
        },
        1400: {
          slidesPerView: 6,
        },
        1900: {
          slidesPerView: 7,
        },
        2200: {
          slidesPerView: 8,
        },
        2600: {
          slidesPerView: 9,
        },
        3200: {
          slidesPerView: 10,
        },
        3600: {
          slidesPerView: 12,
        },
      }}
    >
      {collectionList.map((item, index) => (
        <SwiperSlide key={index} className="cl-slider-slide">
          <div className="cl-slider-card d-flex flex-col">
            <div className="slider-img-box">
              <img src={item?.img} alt={item.name} />
              <div className="slider-socials d-flex j-c-c a-i-c">
                {item?.discord && (
                  <a href={item?.discord} target="_blank" rel="noopener noreferrer">
                    <DiscordIcon />
                  </a>
                )}
                {item?.twitter && (
                  <a href={item?.twitter} target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                  </a>
                )}
                {item?.web && (
                  <a href={item?.web} target="_blank" rel="noopener noreferrer">
                    <WebIcon />
                  </a>
                )}
              </div>
            </div>
            <div className="slider-title d-flex a-i-c j-c-c">
              <h6>{item?.title}</h6>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CollectionSlider;
