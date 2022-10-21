import React from "react";

import ContentLoader from "react-content-loader";

const SkeletonBlogView = (props) => (
  <>
    <ContentLoader
      className="mx-auto"
      width={"100%"}
      height={300}
      viewBox="0 0 450 400"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      {...props}
    >
      <rect x="127" y="40" rx="2" ry="2" width="215" height="32" />
      <rect x="0" y="80" rx="2" ry="2" width="450" height="300" />
      <rect x="127" y="100" rx="2" ry="2" width="300" height="100" />
    </ContentLoader>
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {" "}
      <ContentLoader
        className="mx-auto"
        height={200}
        width={"100%"}
        viewBox="0 0 400 200"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
      </ContentLoader>
      <ContentLoader
        className="mx-auto"
        height={200}
        width={"100%"}
        viewBox="0 0 400 200"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
      </ContentLoader>{" "}
      <ContentLoader
        className="mx-auto"
        height={200}
        width={"100%"}
        viewBox="0 0 400 200"
        backgroundColor="#d9d9d9"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
        <rect x="15" y="15" rx="4" ry="4" width="130" height="10" />
        <rect x="155" y="15" rx="3" ry="3" width="130" height="10" />
        <rect x="295" y="15" rx="3" ry="3" width="90" height="10" />
        <rect x="15" y="50" rx="3" ry="3" width="90" height="10" />
        <rect x="115" y="50" rx="3" ry="3" width="60" height="10" />
        <rect x="185" y="50" rx="3" ry="3" width="200" height="10" />
        <rect x="15" y="90" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="90" rx="3" ry="3" width="120" height="10" />
        <rect x="290" y="90" rx="3" ry="3" width="95" height="10" />
        <rect x="15" y="130" rx="3" ry="3" width="130" height="10" />
        <rect x="160" y="130" rx="3" ry="3" width="225" height="10" />
      </ContentLoader>
    </div>
  </>
);

const SkeletonBlogList = (props) => (
  <>
    {/* web */}
    <div className="mx-auto lg:grid grid-cols-2 hidden">
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>{" "}
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>{" "}
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>{" "}
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>
      <ContentLoader
        width={450}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="315" height="217" />
      </ContentLoader>
    </div>
    {/* mobile */}
    <div className="mx-auto lg:hidden space-y-[-110px] grid-cols-1 grid">
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
      <ContentLoader
        width={"100%"}
        height={400}
        viewBox="0 0 450 400"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
        {...props}
      >
        <rect x="43" y="304" rx="4" ry="4" width="271" height="24" />
        <rect x="44" y="333" rx="3" ry="3" width="119" height="24" />
        <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
      </ContentLoader>
    </div>
  </>
);

function SkeletonImageList() {
  return (
    <div className="mx-auto lg:w-[80%] w-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
   <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={350}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
    </div>
  );
}

export { SkeletonBlogView, SkeletonBlogList, SkeletonImageList };
