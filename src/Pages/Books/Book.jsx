/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { Link } from "react-router-dom";


const Book = ({ bookItem }) => {

    const { _id, name, category, quantity, AuthorsName, short, rating2, photo } = bookItem || {}

    return (

        <div className="card bg-base-100 shadow-xl " key={_id}>
            <figure><img className="w-full h-96" src={photo} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-3xl">{name}</h2>
                <p className="text-base font-semibold mt-4">CATEGORY: {category}</p>
                <p className={`text-lg font-semibold ${quantity === 0 ? 'text-red-600' : ''}`}>
                    {quantity === 0 ? 'Out of Stock' : `Available Books: ${quantity}`}
                </p>


                <p className="text-lg font-semibold text-[#E59285]">AUTHOR:{AuthorsName}</p>
                <div className="rating">

                    <Rating
                        emptySymbol={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                        }
                        fullSymbol={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }
                        initialRating={rating2}
                        readonly
                    />
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>  <button className="btn bg-[#E59285] hover:bg-[#E59285] text-white">Details</button></Link>
       
                </div>
            </div>
        </div>

    );
};

export default Book;