import logo from "../../public/netflix-2-logo-svgrepo-com.svg";
const Header = () => {
  return (
    <div className="z-50 absolute  w-full">
      <div className=" mx-30 flex justify-between items-center h-20">  
        {/* padding */}
        <div className=""><img className="w-40  h-40"  src={logo} alt="" /></div>
        <div>
          <button>English</button>
          <button>SignIn</button>
        </div>
      </div>
    </div>
  );
}

export default Header