
const HeroSection = () => {
  return (
    <div className="relative top-0 overflow-hidden  ">
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/30c8b9f4-3db9-4b3b-a1ee-8fa56531b712/web/IN-en-20251201-TRIFECTA-perspective_c7623e8e-c406-43d2-9d9a-0140ce19ac84_large.jpg"
          alt=""
        />
    
      </div>
      <div
        className="absolute inset-0 
        bg-linear-to-b from-black/90 via-black/40 to-black/90 "
      ></div>
      <div className="relative z-10">header</div>
    </div>
  );
}

export default HeroSection