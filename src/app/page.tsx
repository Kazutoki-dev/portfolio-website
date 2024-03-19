import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h2>氏名</h2>
        <p>縄巻一鴻</p>
      </div>
      <div>
        <h2>経歴</h2>
      </div>
      <div>
        <h2>自己紹介</h2>
      </div>
      <div>
        <h2>保有資格</h2>
      </div>
      <div>
        <h2>連絡先</h2>
        <Link href="/test">テスト</Link>
      </div>
    </div>
  );
}
