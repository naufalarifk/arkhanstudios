import React, { useState } from "react";
import NumberCount from "../../component/utils/numbercount/NumberCount";
import Showcase from "../../component/utils/showcase/Showcase";
import Wrapper from "../../component/wrapper";
import { Link } from "react-router-dom";
import Portonav from "../../component/utils/portonav/Portonav";

const Mascot = () => {
  const mascot_design = [
    {
      alt: "",
      src: require("../../common/assets/mascot/1.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/2-giobrusca.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/3-dougsoptics.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/4-cultcanon.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/5-fantauzzi.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/6-dadatech.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/7-dorian.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/8-dougsoptics2.webp"),
    },
    {
      alt: "",
      src: require("../../common/assets/mascot/9-DTSmith.webp"),
    },
  ];
  const tee_design = [
    {
      alt: "",
      src: require("../../common/assets/tee/1-KURAMA.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/2-UZUI.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/3-BEZITA.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/4-Luffy.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/5-TRUNK.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/6-ANIMEGIRL.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/7-pikachu.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/8-mummy.jpg"),
    },
    {
      alt: "",
      src: require("../../common/assets/tee/9-JOKER.jpg"),
    },
  ];
  const trackRecord = [
    { title: "CUSTOMERS", number: 378 },
    { title: "ORDERS", number: 804 },
    { title: "REFUNDS", number: 12 },
    { title: "%REFUND", number: 2 },
  ];
  const [activePage, setActivePage] = useState(mascot_design);
  const [activeTitle, setActiveTitle] = useState("mascot_design");

  const setPage = (item, title) => {
    setActivePage(item);
    setActiveTitle(title);
  };

  return (
    <Wrapper>
      <section className="container flex flex-col h-auto w-[100%] bg-[#512995]">
        <div className="mx-auto mt-12 flex flex-col">
          <p className="mx-auto text-center p-4 text-white text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
            Cartoon Logo Design for Fun Brands
          </p>
          <p className="mx-auto text-center p-4 text-white">
            Developing the art of creating cartoon logos for more than 15 years.
          </p>
          <Portonav/>
          <Showcase item={mascot_design} />
        </div>
        <NumberCount trackRecord={trackRecord} />
      </section>
    </Wrapper>
  );
};

export default Mascot;
