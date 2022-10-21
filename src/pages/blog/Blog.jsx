import React, { useEffect, useState } from "react";
import Wrapper from "../../component/wrapper";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Api } from "../../api";
import { Link } from "react-router-dom";
import { SkeletonBlogList } from "../../component/skeleton/Skeleton";
const Blog = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBlogs = async () => {
    try {
      let res = await Api.get(
        process.env.REACT_APP_API + "/api/blogs?populate=*"
      );
      setItems(res.data.data);
      console.log(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogs();
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      <section className="container p-2 lg:p-16 flex flex-row justify-between bg-[#512995] text-white">
        {!loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-3/4 gap-8 mt-12">
            {items.map((item, idx) => (
              <div key={idx}>
                <img
                  className="h-[220px] w-[320px]"
                  src={item.attributes.blogCover.data.attributes.url}
                  alt=""
                />
                <h1 className="text-2xl font-semibold">
                  {item.attributes.title}
                </h1>
                <p>{item.attributes.desc}</p>
                <Link
                  to={`/blog/${item.id}`}
                  className="flex flex-row items-center gap-2"
                >
                  <p>Read More</p>
                  <AiOutlineArrowRight className="mt-1" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <SkeletonBlogList />
        )}
      </section>
    </Wrapper>
  );
};

export default Blog;
