import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={260}
    height={500}
    viewBox="0 0 260 500"
    backgroundColor="rgb(211,211,211)"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="128" cy="126" r="128" /> 
    <rect x="0" y="275" rx="10" ry="10" width="260" height="27" /> 
    <rect x="0" y="317" rx="10" ry="10" width="260" height="90" /> 
    <rect x="0" y="421" rx="10" ry="10" width="95" height="30" /> 
    <rect x="104" y="414" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;