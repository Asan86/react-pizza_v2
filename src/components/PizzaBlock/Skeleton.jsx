import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
  className="pizza-block"
    speed={0}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="123" cy="123" r="123" />
    <rect x="3" y="272" rx="10" ry="10" width="249" height="28" />
    <rect x="1" y="316" rx="10" ry="10" width="249" height="78" />
    <rect x="8" y="420" rx="10" ry="10" width="95" height="30" />
    <rect x="125" y="418" rx="25" ry="25" width="125" height="37" />
  </ContentLoader>
);

export default Skeleton;
