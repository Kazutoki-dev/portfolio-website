import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";

const Photo = () => {
  const imageData = [
    {
      imgPath: "/photo/malta.jpg",
      alt: "malta",
      countryName: "Malta",
      comment: "",
    },
    {
      imgPath: "/photo/usa.jpg",
      alt: "usa",
      countryName: "San Francisco, USA",
      comment: "",
    },
    {
      imgPath: "/photo/singapore.jpg",
      alt: "singapore",
      countryName: "Singapore",
      comment: "",
    },
    {
      imgPath: "/photo/swiss.jpg",
      alt: "swiss",
      countryName: "Switzerland",
      comment: "",
    },
    {
      imgPath: "/photo/thai.jpg",
      alt: "thai",
      countryName: "Thailand",
      comment: "",
    },
  ];

  return (
    <div className="flex-col justify-center items-center">
      {imageData.map((image, index) => (
        <div
          key={index}
          className="card max-w-lg lg:card-side bg-base-100 shadow-xl w-3/4 lg:max-w-3xl self-center mx-auto mb-8"
        >
          <figure>
            <Image
              src={`${image.imgPath}`}
              width={600}
              height={600}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{image.countryName}</h2>
            <p>{image.comment}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-wide" disabled={true}>
                Coming soon...
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Photo;
