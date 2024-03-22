import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-white flex fixed w-full h-16 justify-center items-center border-b-2 box-content">
      <a href="#profile">
        <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
          <p className="my-5">PROFILE</p>
        </button>
      </a>
      <a href="#skill">
        <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
          <p className="my-5">SKILL</p>
        </button>
      </a>
      <a href="#portfolio">
        <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
          <p className="my-5">PORTFOLIO</p>
        </button>
      </a>
      <a href="#certification">
        <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
          <p className="my-5">CERTIFICATION</p>
        </button>
      </a>
      <a href="#photo">
        <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
          <p className="my-5">PHOTO</p>
        </button>
      </a>
      <a href="#contact">
        <button className="mx-4 h-16 border-b-4 border-transparent box-border hover:border-b-4 hover:border-black hover:box-border transition-all duration-300">
          <p className="my-5">CONTACT</p>
        </button>
      </a>
    </div>
  );
};
export default Navbar;
