import React, { useState, useEffect, Suspense, lazy } from "react";
import Wrapper from "../../component/wrapper";
import Portonav from "../../component/utils/portonav/Portonav";
import { Api } from "../../api";
import { SkeletonImageList } from "../../component/skeleton/Skeleton";

const NumberCount = lazy(() =>
  import("../../component/utils/numbercount/NumberCount")
);
const Showcase = lazy(() => import("../../component/utils/showcase/Showcase"));
function Tee() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const getTeeItems = async () => {
    try {
      let res = await Api.get(
        process.env.REACT_APP_API + "/api/portofolios?populate=teeDesign"
      );
      setItems(res.data.data[0].attributes.teeDesign.data);
      console.log(res.data.data[0].attributes.teeDesign.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeeItems();
    // eslint-disable-next-line
  }, []);
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
          <Portonav />

          {loading ? (
            <SkeletonImageList />
          ) : (
            <Suspense fallback={<SkeletonImageList />}>
              <Showcase item={items} />
            </Suspense>
          )}
        </div>
        <Suspense fallback={<div>LOADING</div>}>
          <NumberCount trackRecord={trackRecord} />
        </Suspense>
      </section>
    </Wrapper>
  );
}

export default Tee;
