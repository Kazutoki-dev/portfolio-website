import Link from "next/link";

const Navbar = () => {
  return (
    // <div className="bg-white flex fixed w-full h-16 justify-center items-center border-b-2 box-content z-50">
    //   <a href="#profile">
    //     <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
    //       <p className="my-5">PROFILE</p>
    //     </button>
    //   </a>
    //   <a href="#skill">
    //     <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
    //       <p className="my-5">SKILL</p>
    //     </button>
    //   </a>
    //   <a href="#portfolio">
    //     <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
    //       <p className="my-5">PORTFOLIO</p>
    //     </button>
    //   </a>
    //   {/* <a href="#certification">
    //     <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
    //       <p className="my-5">CERTIFICATION</p>
    //     </button>
    //   </a> */}
    //   <a href="#photo">
    //     <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
    //       <p className="my-5">PHOTO</p>
    //     </button>
    //   </a>
    //   <a href="#contact">
    //     <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
    //       <p className="my-5">CONTACT</p>
    //     </button>
    //   </a>
    // </div>

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
        {/* <ul className="menu menu-horizontal menu-sm z-[1] px-4 text-base font-medium">
          <li className="mx-2">
            <Link href={process.env.NEXT_PUBLIC_HOME_PAGE ?? ""}>Home</Link>
          </li>
          <li>
            <details className="dropdown">
              <summary>Photo Page</summary>
              <ul className="p-2 bg-base-100 rounded-t-none dropdown-content font-normal">
                <li className="mb-1">
                  <Link href={process.env.NEXT_PUBLIC_PHOTO_PAGE ?? ""}>
                    Top
                  </Link>
                </li>
                <ul>
                  <li className="mb-1">
                    <Link href={process.env.NEXT_PUBLIC_MALTA_PAGE ?? ""}>
                      Malta
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href={process.env.NEXT_PUBLIC_PHOTO_PAGE ?? ""}>
                      USA
                    </Link>
                  </li>
                </ul>
              </ul>
            </details>
          </li>
        </ul> */}
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
                <li>
                  <Link href={process.env.NEXT_PUBLIC_PHOTO_PAGE ?? ""}>
                    Top
                  </Link>
                </li>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_MALTA_PAGE ?? ""}>
                    🇲🇹 Malta
                  </Link>
                </li>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_PHOTO_PAGE ?? ""}>
                    🇺🇸 USA
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
