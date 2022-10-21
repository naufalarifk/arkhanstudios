import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Api } from "../../api";
import Wrapper from "../../component/wrapper";
import { BiArrowBack } from "react-icons/bi";
import { SkeletonBlogView } from "../../component/skeleton/Skeleton";

function BlogView() {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getBlog = async () => {
    try {
      let res = await Api.get(
        `${process.env.REACT_APP_API}/api/blogs/${id}?populate=*`
      );
      setBlog(res.data.data.attributes);
      console.log(res.data.data.attributes);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlog();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      {!loading ? (
        <section className="container max-w-7xl px-12 py-4 space-y-4 bg-[#512995] text-white">
          <Link
            to="/blogs"
            className="flex flex-row ml-20 w-16 items-center space-x-1 bg-black px-2 py-1"
          >
            <BiArrowBack />
            <p>Back</p>
          </Link>
          <h1 className="font-bold text-3xl text-center">{blog?.title}</h1>
          <img
            className={`h-[300px] w-[450px] mx-auto bg-gray-300 ${
              blog.blogCover === null ? `animate-pulse` : ``
            }`}
            src={blog.blogCover?.data.attributes.url}
            alt=""
          />
          <p className="text-lg px-16">{blog.content}</p>
        </section>
      ) : (
        <section className="container max-w-7xl px-12 py-4 bg-[#512995]">
            <SkeletonBlogView />
        </section>
      )}
    </Wrapper>
  );
}

export default BlogView;
