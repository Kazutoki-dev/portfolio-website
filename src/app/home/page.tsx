import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Skill from "@/app/ui/home/skill";
import Portfolio from "@/app/ui/home/portfolio";
import CarouselHome from "../ui/Carousel/CarouselHome";

export default function Home() {
  return (
    <div className="font-base">
      <div
        id="top"
        className="bg-[url('/malta.jpg')] bg-cover bg-center text-white text-2xl sm:text-3xl md:text-4xl h-3/4 viewport-80vh align-center flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col items-center justify-center bg-white py-6">
          <p className="text-3xl sm:text-5xl md:text-6xl mb-4 bg-white text-black">
            KAZUTOKI NAWAMAKI
          </p>
          <p className="text-black">ENGINEER / DESIGN / PHOTO</p>
          <p className="text-black"> PORTFOLIO SITE</p>
        </div>
      </div>
      <div
        id="profile"
        className="flex flex-col justify-center items-center text-center min-viewport-50vh content"
      >
        <p className="title text-4xl">PROFILE</p>
        <div className="flex-col flex md:w-5/6 lg:w-3/4 justify-center mx-6 md:pl-8 md:pr-0">
          <Image
            src="/portrait.jpg"
            width={200}
            height={200}
            alt="Picture of Kazutoki"
            className="rounded-full w-40 h-40 self-center mr-8"
          />
          {/* 自己紹介文 */}
          <div className="text-left mx-auto">
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
        <CarouselHome />
        <p className="mt-4 md:hidden">※左右にスワイプ</p>
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
