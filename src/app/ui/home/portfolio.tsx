import Image from "next/image";

const Portfolio = () => {
  const portfolioData = [
    {
      url: process.env.NEXT_PUBLIC_HOME_PAGE,
      imgPath: "/portfolio.jpg",
      message1: "ポートフォリオのためのWebサイトの制作",
      message2: "使用技術: Next.js、TailwindCSS、DaisyUI",
    },
    {
      url: "https://nawamaki.notion.site/friendnote-a3bf679443cf4979b4a1382d63d63236",
      imgPath: "/friendnote.png",
      message1: "共有メモアプリ「friendnote」のUIデザイン",
      message2: "使用技術: Figma",
    },
  ];
  return (
    <div
      id="portfolio"
      className="flex flex-col justify-center items-center content"
    >
      <p className="title text-4xl">PORTFOLIO</p>
      <div className="flex flex-wrap items-start">
        {portfolioData.map((data, index) => (
          <div
            key={index}
            className="w-full md:w-96 md:flex flex-col justify-center items-center mx-auto"
          >
            <div className="w-56 mx-auto mb-8">
              <a role="button" href={data.url}>
                <Image
                  src={data.imgPath}
                  width={400}
                  height={400}
                  alt="icon"
                  className="rounded-3xl"
                />
              </a>
            </div>
            <div className="text-center mb-12 md:mb-0">
              <p>{data.message1}</p>
              <p>{data.message2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
