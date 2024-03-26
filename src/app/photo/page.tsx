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
      nextPage: process.env.NEXT_PUBLIC_MALTA_PAGE,
    },
    {
      imgPath: "/photo/usa.jpg",
      alt: "usa",
      countryName: "San Francisco, USA",
      comment: "",
      nextPage: process.env.NEXT_PUBLIC_USA_PAGE,
    },
    {
      imgPath: "/photo/singapore.jpg",
      alt: "singapore",
      countryName: "Singapore",
      comment: "",
      nextPage: process.env.NEXT_PUBLIC_SINGAPORE_PAGE,
    },
    {
      imgPath: "/photo/swiss.jpg",
      alt: "swiss",
      countryName: "Switzerland",
      comment: "",
      nextPage: process.env.NEXT_PUBLIC_SWISS_PAGE,
    },
    {
      imgPath: "/photo/thai.jpg",
      alt: "thai",
      countryName: "Thailand",
      comment: "",
      nextPage: process.env.NEXT_PUBLIC_THAILAND_PAGE,
    },
  ];

  return (
    <div className="flex-col justify-center items-center mt-8">
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
          <div className="card-body lg:max-w-xs">
            <h2 className="card-title">{image.countryName}</h2>
            <p>{image.comment}</p>
            <div className="card-actions justify-end">
              {image.nextPage ? (
                <Link
                  href={image.nextPage ?? ""}
                  className="btn btn-primary btn-outline btn-wide"
                >
                  Look {image.countryName}
                </Link>
              ) : (
                <button
                  disabled={true}
                  className="btn btn-primary btn-outline btn-wide"
                >
                  Coming Soon...
                </button>
              )}

              {/* </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Photo;
