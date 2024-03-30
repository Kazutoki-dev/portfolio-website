import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-white fixed border-b-2 z-50">
      <div className="flex-1">
        <Link
          href={process.env.NEXT_PUBLIC_HOME_PAGE ?? ""}
          className="btn btn-ghost text-xl"
        >
          Portfolio Site
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <Link
              href={process.env.NEXT_PUBLIC_HOME_PAGE ?? ""}
              className="btn btn-ghost rounded-btn"
            >
              Home
            </Link>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                Photo Page
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li className="mb-1">
                  <Link href={process.env.NEXT_PUBLIC_PHOTO_PAGE ?? ""}>
                    Top
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href={process.env.NEXT_PUBLIC_MALTA_PAGE ?? ""}>
                    🇲🇹 &nbsp;Malta
                  </Link>
                </li>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_USA_PAGE ?? ""}>
                    🇺🇸 &nbsp;USA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
