import { FaClipboardCheck, FaFlag } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


const HowWork = () => {
    return (
        <div className="mt-20">
        <h1 className="font-teko font-extrabold text-center text-7xl mb-3">How We Work</h1> <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="text-7xl text-[#E59285]"><FaFlag></FaFlag></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-outfit font-bold text-xl">Connect Writers to Readers</h2>
                    <p>Connect Our Writers to Our User... We connect both and make a connection</p>
                   
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="text-7xl text-[#E59285]"><FaClipboardCheck></FaClipboardCheck></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-outfit font-bold text-xl">Sells Hard Copy Book In Book Fair</h2>
                    <p>We are sells 700k+ Hard Copy Books in last 5 Years...</p>
                   
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="text-7xl text-[#E59285]"><FaPeopleGroup></FaPeopleGroup></figure>
                <div className="card-body">
                    <h2 className="card-title text-center font-outfit font-bold text-xl">New Writers Publish Book</h2>
                    <p>We inspire new generations Writers to write book...And They Can Publish Their Books out Boigor</p>
                   
                </div>
            </div>
          
        </div>
    </div>
    );
};

export default HowWork;