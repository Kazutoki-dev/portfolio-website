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
        <div className="flex">
          <Image
            src="/lucci.png"
            width={200}
            height={200}
            alt="Picture of Kazutoki"
            className="rounded-full w-40 h-40 self-center"
          />
          <div className="text-sm text-left">
            <p>縄巻一鴻</p>
            <p>あだ名はまっきー、まきまき、など</p>
            <ul className="list-disc list-inside">
              <li>1999年生まれ</li>
              <li>静岡県東部出身</li>
              <li>大阪大学 / 工学部卒</li>
            </ul>
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
      <div id="skill" className="flex flex-col justify-center items-center">
        <p className="text-4xl">SKILL</p>
        <p>フロントエンドエンジニアを目指して日々勉強中です！</p>
        <p>将来的にはバックエンドも作れる人材になりたいと思っております。</p>
        <p>また、デザインにも興味があり、Figmaも一通り使えます。</p>
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
        <p className="text-4xl mb-4">PHOTO</p>
        <div className="carousel w-3/4">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              src="/carousel/usa.jpg"
              width={1920}
              height={1280}
              alt="photo"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link href="#slide4" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide2" className="btn btn-circle">
                ❯
              </Link>
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
              <Link href="#slide1" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide3" className="btn btn-circle">
                ❯
              </Link>
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
              <Link href="#slide2" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide4" className="btn btn-circle">
                ❯
              </Link>
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
              <Link href="#slide3" className="btn btn-circle">
                ❮
              </Link>
              <Link href="#slide1" className="btn btn-circle">
                ❯
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="flex flex-col justify-center items-center">
        <p className="text-4xl">CONTACT</p>
      </div>
    </div>
  );
}
