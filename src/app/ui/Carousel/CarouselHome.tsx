import Image from "next/image";
import React from "react";
import CarouselSingle from "./component/CarouselSingle";

const CarouselHome = () => {
  const props = {
    width: 1200,
    height: 800,
    data: [
      {
        id: "slide1",
        id_before: "slide9",
        id_after: "slide2",
        src: "/carousel/usa1.jpg",
      },
      {
        id: "slide2",
        id_before: "slide1",
        id_after: "slide3",
        src: "/carousel/usa2.jpg",
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
        id_after: "slide5",
        src: "/carousel/italy.jpg",
      },
      {
        id: "slide5",
        id_before: "slide4",
        id_after: "slide6",
        src: "/carousel/romania1.jpg",
      },
      {
        id: "slide6",
        id_before: "slide5",
        id_after: "slide7",
        src: "/carousel/romania2.jpg",
      },
      {
        id: "slide7",
        id_before: "slide6",
        id_after: "slide8",
        src: "/carousel/singapore.jpg",
      },
      {
        id: "slide8",
        id_before: "slide7",
        id_after: "slide9",
        src: "/carousel/koria.jpg",
      },
      {
        id: "slide9",
        id_before: "slide8",
        id_after: "slide1",
        src: "/carousel/malta.jpg",
      },
    ],
  };

  return (
    <div className="carousel w-11/12 md:w-3/4 max-w-4xl rounded-box">
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
