import { FaAppStore, FaGooglePlay } from "react-icons/fa";

const MobileApp = () => {
    return (
        <div>
            <div className="md:flex mt-4 justify-between gap-3">

<div className="mt-7">
    <h1 className="font-bold text-5xl">Download <span className="text-[#E59285]">Our Boigor</span> <br />  App For Free</h1>

    <p className="mt-8 font-medium text-lg">Download App for Know Latest Update... <br /> And enjoy our services from mobile.</p>

    <div className=" md:flex mt-10 gap-5">
        
        <div className="flex gap-3 bg-[#E59285] text-white rounded-xl justify-center items-center  btn h-auto hover:bg-[#E59285]">
           <FaGooglePlay className="w-10 h-20"></FaGooglePlay>
          <div className=""> 
          <span>Get it on</span><br />
           <p>Play Store</p>
          </div>
          
        </div>
        <div className="flex gap-3 bg-[#E59285] text-white pl-5 pr-5 rounded-xl justify-center items-center cursor-pointer btn h-auto hover:bg-[#E59285]">
           <FaAppStore className="w-10 h-20"></FaAppStore>
          <div className=""> 
          <span>Get it on</span><br />
           <p>App Store</p>
          </div>
          
        </div>
        
    </div>

</div>
<div className="ml-6 md:w-96 h-full">
    <img src={"https://i.ibb.co/Y7HLWHs/app.png"} alt="" />
</div>
</div>
        </div>
    );
};

export default MobileApp;