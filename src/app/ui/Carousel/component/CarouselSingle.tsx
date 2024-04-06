import Image from "next/image";
import React from "react";
type CarouselProps = {
  width: number;
  height: number;
  data: {
    id: string;
    id_before: string;
    id_after: string;
    src: string;
  };
};

const CarouselSingle: React.FC<CarouselProps> = ({ width, height, data }) => {
  return (
    <div id={data.id} className="carousel-item relative w-full">
      <Image
        src={data.src}
        width={width}
        height={height}
        alt={data.id}
        className="w-full"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 invisible md:visible">
        <a href={`#${data.id_before}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#${data.id_after}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselSingle;
