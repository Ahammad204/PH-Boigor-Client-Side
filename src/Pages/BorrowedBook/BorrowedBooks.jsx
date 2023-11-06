/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../Provider/AuthProvider';



const BorrowedBooks = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = `http://localhost:5000/borrowed?email=${user.email}`;

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                // console.log(data)

            })

    })



    return (
        <div>

            {bookings.length > 0 ? (



                <div>
                    <h1 className="text-center font-bold text-6xl mb-5 mt-5"> Your Borrowed  <span className="text-[#ED1D26]"> Books</span></h1>
                    <hr />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        {bookings?.map(prod => (
                            <div className="card bg-base-100 shadow-xl" key={prod._id}>
                                <figure><img className="w-full h-72" src={prod.photo} alt={prod.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-extrabold text-3xl">{prod.name}</h2>
                                    <p className="text-lg font-medium ">{prod.category}</p>
                                    <p className="text-base font-semibold mt-4">Borrowed Date: {prod.today}</p>
                                    <p className="text-base font-semibold ">Return Date: {prod.returnDate}</p>

                                    <div className="card-actions justify-end">

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            ) : (

                <div>
                    {!isLoading ? (
                        <div className="flex justify-center items-center mt-20">
                            <div className="hero w-2/3 h-2/3">
                                <div className=""></div>
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <span className="loading loading-bars loading-lg"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (

                        <div className="flex justify-center items-center mt-20">
                            <div className="hero w-2/3 h-2/3" >
                                <div className=""></div>
                                <div className="hero-content text-center ">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hey Book Lover</h1>
                                        <p className="mb-5 text-xl ">There is noting to show <br /> Borrow Some Book For Explore</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            )



            }
        </div>
    );
};

export default BorrowedBooks;