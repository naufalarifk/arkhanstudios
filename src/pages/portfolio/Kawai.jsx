import React, {lazy, Suspense, useState, useEffect} from 'react'
import Wrapper from "../../component/wrapper";
import Portonav from '../../component/utils/portonav/Portonav';
import { SkeletonImageList } from '../../component/skeleton/Skeleton';
import { Api } from '../../api';

const NumberCount = lazy(()=> import('../../component/utils/numbercount/NumberCount'))
const Showcase = lazy(()=> import( "../../component/utils/showcase/Showcase"))
function Kawai() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const ImageList = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];

      const trackRecord = [
        { title: "CUSTOMERS", number: 378 },
        { title: "ORDERS", number: 804 },
        { title: "REFUNDS", number: 12 },
        { title: "%REFUND", number: 2 },
      ];
      const getKawaiItems = async () => {
        try {
          let res = await Api.get(
            process.env.REACT_APP_API + "/api/portofolios?populate=chibiDesign"
          );
          setItems(res.data.data[0].attributes.chibiDesign.data);
          console.log(res.data.data[0]);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getKawaiItems();
        // eslint-disable-next-line
      }, []);

      return (
        <Wrapper>
          <section className="container flex flex-col h-auto w-[100%] bg-[#512995]">
            <div className="mx-auto mt-12 flex flex-col">
              <p className="mx-auto text-center p-4 text-white text-lg md:text-2xl lg:text-4xl font-bold rounded-lg inter">
              See more to our masterpieces
              </p>
              <p className="mx-auto text-center p-4 text-white">
              Here are some of our masterpieces that clients love it so much!
              </p>
                <Portonav/>
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

export default Kawai