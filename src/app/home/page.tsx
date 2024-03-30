import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Skill from "@/app/ui/home/skill";
import Portfolio from "@/app/ui/home/portfolio";
import Certification from "../ui/home/certification";
import CarouselHome from "../ui/Carousel/CarouselHome";

export default function Home() {
  return (
    <div className="font-base">
      <div
        id="top"
        className="bg-[url('/malta.jpg')] bg-cover bg-center text-white text-4xl p-auto h-3/4 viewport-80vh align-center flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col items-center justify-center bg-white py-6">
          <p className="text-6xl mb-4 bg-white text-black">KAZUTOKI NAWAMAKI</p>
          <p className="bg-white/30 text-black">ENGINEER / DESIGN / PHOTO</p>
          <p className="bg-white text-black"> PORTFOLIO SITE</p>
        </div>
      </div>
      <div
        id="profile"
        className="flex flex-col justify-center items-center text-center min-viewport-50vh content"
      >
        <p className="title text-4xl">PROFILE</p>
        <div className="flex w-3/4 justify-center pl-10">
          <Image
            src="/portrait.jpg"
            width={200}
            height={200}
            alt="Picture of Kazutoki"
            className="rounded-full w-40 h-40 self-center mr-8"
          />
          {/* 自己紹介文 */}
          <div className="text-left">
            <p>縄巻一鴻</p>
            <ul className="list-disc list-inside">
              <li>1999年生まれ</li>
              <li>静岡県東部出身</li>
              <li>大阪大学 / 工学部卒</li>
            </ul>
            <p>あだ名はまっきー、まきまき、など</p>
            <p>2023年11月ごろから駆け出しのエンジニアとして働いています。</p>
            <p>
              直近はフロントエンドのスキルを高めるための勉強をしてきました。
            </p>
            <p>
              これからはフロントエンドだけでなく、バックエンドやUI/UXなどの領域でも専門性を伸ばしていきたいと考えています。
            </p>
            <br />
            <p>
              このWebサイトには、エンジニアとしての自己研鑽のために作った
              Webサイト / Webアプリケーション / Figmaデザインを載せています。{" "}
            </p>
            <p>
              今後もポートフォリオの内容を追加していく予定ですので、どうぞよろしくお願いいたします。
            </p>
            <br />
            <p>
              またそれとは別に、海外旅行時に趣味で撮った写真も掲載しております。
            </p>
            <p>
              日本では見られない景色がたくさんありますので、よかったら楽しんでいってください。
            </p>
          </div>
        </div>
      </div>
      <Skill />
      <Portfolio />
      {/* <Certification /> */}
      <div
        id="photo"
        className="flex flex-col justify-center items-center content"
      >
        <p className="title text-4xl mb-4">PHOTO</p>
        {/* 写真カルーセル */}
        {/* <div className="carousel w-3/4">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              src="/carousel/usa.jpg"
              width={1920}
              height={1280}
              alt="photo"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              src="/carousel/italy.jpg"
              width={1920}
              height={1280}
              alt="photo"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image
              src="/carousel/swiss.jpg"
              width={1920}
              height={1280}
              alt="photo"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image
              src="/carousel/malta.jpg"
              width={1920}
              height={1280}
              alt="photo"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div> */}
        <CarouselHome />
        <Link className="btn btn-primary btn-outline mt-8 w-1/2" href="/photo">
          Go to PHOTO page
        </Link>
      </div>
      <div
        id="contact"
        className="flex flex-col justify-center items-center content"
      >
        <p className="title text-4xl">CONTACT</p>
        <a href="https://www.instagram.com/nawamakimaki/">
          <button>
            <Image
              src="/Instagram_icon.png"
              width={400}
              height={400}
              alt="Instagram Icon"
              className="w-24 mb-8"
            />
          </button>
        </a>
        <p>上記インスタのDMにてご連絡ください</p>
      </div>
    </div>
  );
}
