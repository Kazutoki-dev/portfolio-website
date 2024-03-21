import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-base">
      <div className="bg-[url('/malta.jpg')] bg-cover bg-center text-white text-4xl p-auto h-3/4 viewport-80vh align-center flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center bg-white py-6">
          <p className="text-6xl mb-4 bg-white text-black px-4">
            KAZUTOKI NAWAMAKI
          </p>
          <p className="bg-white/30 text-black px-4">
            ENGINEER / DESIGN / PHOTO
          </p>
          <p className="bg-white text-black px-4"> PORTFOLIO SITE</p>
        </div>
      </div>
      <div
        id="profile"
        className="flex flex-col justify-center items-center text-center min-viewport-50vh"
      >
        <p className="text-4xl">PROFILE</p>
        <Image
          src="/lucci.png"
          width={200}
          height={200}
          alt="Picture of Kazutoki"
          className="rounded-full"
        />
        <p>縄巻一鴻</p>
        <p>大阪大学</p>
        <p>2023年11月ごろから駆け出しのエンジニアをしております。</p>
        <p>
          このサイトはエンジニアとしての自己研鑽のために作った
          <br />
          Webサイト / Webアプリケーションを載せております。
        </p>
        <p>
          またそれとは別に、海外旅行に行った時に撮った写真も掲載しております。
        </p>
        <p>
          今後もアプリケーションやデザインのポートフォリオの内容を追加していく予定ですので、
          <br />
          どうぞよろしくお願いいたします。
        </p>
      </div>
      <div id="skill" className="flex flex-col justify-center items-center">
        <p className="text-4xl">SKILL</p>
      </div>
      <div id="portfolio" className="flex flex-col justify-center items-center">
        <p className="text-4xl">PORTFOLIO</p>
      </div>
      <div
        id="certification"
        className="flex flex-col justify-center items-center"
      >
        <p className="text-4xl">CERTIFICATION</p>
      </div>
      <div id="photo" className="flex flex-col justify-center items-center">
        <p className="text-4xl">PHOTO</p>
      </div>
      <div id="contact" className="flex flex-col justify-center items-center">
        <p className="text-4xl">CONTACT</p>
      </div>
    </div>
  );
}
