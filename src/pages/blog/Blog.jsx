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
      <section className="container p-2 lg:p-16 flex flex-col justify-between bg-[#512995] text-white">
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-4xl">We Share Our Skill Here</h1>
          <p className="text-center text-gray-300 my-6">Subscribe to learn about new trends related to design and illustration.</p>
          <form className="mx-auto">
          <input className="p-2 mr-6" type='text' placeholder='Enter your email' />
          <button className="bg-[#7f56d9] p-2">Subscribe</button>
          <p className="text-xs text-gray-300 mt-2">We care about your data in our privacy policy</p>
          </form>
        </div>
        
        <h1 className="ml-36 mt-12 mb-4 font-bold text-xl">All Blog Posts</h1>
        {!loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-3/4 gap-8">
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
