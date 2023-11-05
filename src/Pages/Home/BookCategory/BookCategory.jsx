/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const BookCategory = ({category}) => {

    const { _id, photo, name } = category || {}

    return (
        <div>
            
            
                {/* Brands */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="flex-grow">
                        <img src={photo} alt={name} className="rounded-xl w-72 h-60" />
                    </figure>
                    <div className="card-body items-center text-center ">
                        <h2 className="card-title font-extrabold text-3xl">{name}</h2>
                    
                    </div>
                    <div className="m-3">
                    <Link><button className="btn w-full text-white bg-[#E59285] hover:bg-[#E59285]">See All {name} Books</button></Link>
                    </div>
                </div>

         
        </div>
    );
};

export default BookCategory;