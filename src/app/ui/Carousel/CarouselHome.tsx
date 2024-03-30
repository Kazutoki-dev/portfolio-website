import Image from "next/image";
import React from "react";
import CarouselSingle from "./component/CarouselSingle";

const CarouselHome = () => {
  const props = {
    width: 1920,
    height: 1280,
    data: [
      {
        id: "slide1",
        id_before: "slide4",
        id_after: "slide2",
        src: "/carousel/usa.jpg",
      },
      {
        id: "slide2",
        id_before: "slide1",
        id_after: "slide3",
        src: "/carousel/italy.jpg",
      },
      {
        id: "slide3",
        id_before: "slide2",
        id_after: "slide4",
        src: "/carousel/swiss.jpg",
      },
      {
        id: "slide4",
        id_before: "slide3",
        id_after: "slide1",
        src: "/carousel/malta.jpg",
      },
    ],
  };

  return (
    <div className="carousel w-3/4 max-w-4xl">
      {props.data.map((data, index) => (
        <CarouselSingle
          key={index}
          data={data}
          width={props.width}
          height={props.height}
        />
      ))}
    </div>
  );
};
export default CarouselHome;
