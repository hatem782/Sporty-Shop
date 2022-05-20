import React from "react";
import { useStyles } from "./OurServicesStyles";
import img1 from "../../../../../../Assets/images/Static/serv1.png";
import img2 from "../../../../../../Assets/images/Static/serv2.png";
import { BlackButton } from "../../../../../../components/Buttons/WebsiteButtons";

function OurServices() {
  const css = useStyles();
  return (
    <div className={css.main}>
      {services.map((item, key) => {
        return <Service item={item} key={key} />;
      })}
    </div>
  );
}

const services = [
  {
    title: "Join Our Delivery Service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus quos accusamus cupiditate odio. `,
    bgImg: img1,
  },
  {
    title: "Join Our Commerce Service",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus quos accusamus cupiditate odio.`,
    bgImg: img2,
  },
];

const Service = ({ item }) => {
  const css = useStyles();
  return (
    <div
      className={css.service}
      style={{ backgroundImage: `url(${item.bgImg})` }}
    >
      <div className="description">
        {/* <p className="hint">Accusamus cupiditate</p> */}
        <h1 className="title">{item.title}</h1>
        <div className="devider" />
        <p>{item.description}</p>
        <BlackButton>JOIN NOW</BlackButton>
      </div>
    </div>
  );
};

export default OurServices;
