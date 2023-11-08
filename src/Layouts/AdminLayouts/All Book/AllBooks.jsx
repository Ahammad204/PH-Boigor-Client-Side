


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import Rating from "react-rating";
import Swal from "sweetalert2";

const AllBooks = () => {
    const { user } = useContext(AuthContext);
    const [AllsBooks, setAllsBook] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAvailableBooks, setShowAvailableBooks] = useState(false);
   

    const url = `https://phb-oigor-server-side.vercel.app/book`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAllsBook(data);
                setIsLoading(false);
            });
    }, [url]);

    if (user?.email !== import.meta.env.VITE_ADMIN_EMAIL) {
        return <Navigate to={"/"}></Navigate>;
    }


    const filteredBooks = showAvailableBooks
        ? AllsBooks.filter((book) => book.quantity > 1)
        : AllsBooks;

        


    const handleDelete = (_id) => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#E59285',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Return it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://phb-oigor-server-side.vercel.app/book/${_id}`, {

                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Returned!',
                                'Your Book has been returned.',
                                'success'
                            )
                            const remaining = carts.filter(bok => bok._id !== _id)
                            setCarts(remaining);

                            const fetchBooKIdData = async () => {
                                const response = await fetch(`https://phb-oigor-server-side.vercel.app/${_id}`);
                                const data = await response.json();
                                console.log(data);
                        
                            };
                            fetchBooKIdData();

                        }
                    })
            }
        })

    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [carts, setCarts] = useState(filteredBooks)

    return (
        <div>

            <div className="text-center flex justify-center items-center ">
                <button
                    onClick={() => setShowAvailableBooks(!showAvailableBooks)}
                    className="btn  bg-[#E59285] hover:bg-[#E59285] text-white"
                >
                    {showAvailableBooks ? "Show All Books" : "Show Available Books"}
                </button>
            </div>

            {filteredBooks.length > 0 ? (
                <div>
                    <h1 className="text-center font-bold text-6xl mb-5 mt-5">
                        PHBoigor Library <span className="text-[#E59285]"> Books </span>
                    </h1>
                    <hr />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        {filteredBooks?.map((prod) => (
                            <div className="card bg-base-100 shadow-xl " key={prod._id}>
                                <figure><img className="w-full h-96" src={prod.photo} alt={prod.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title font-extrabold text-3xl">{prod.name}</h2>
                                    <p className="text-base font-semibold mt-4">CATEGORY: {prod.category}</p>
                                    <p className={`text-lg font-semibold ${prod.quantity < 1 ? 'text-red-600' : ''}`}>
                                        {prod.quantity < 1 ? 'Out of Stock' : `Available Books: ${prod.quantity}`}
                                    </p>

                                    <p className="text-lg font-semibold text-[#E59285]">AUTHOR:{prod.AuthorsName}</p>
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
                                            initialRating={prod.rating2}
                                            readonly
                                        />
                                    </div>

                                    <div className="card-actions justify-end">
                                        <button onClick={() => handleDelete(prod._id)} className="btn text-white border-none  bg-[#E59285] hover:bg-[#E59285] ">Delete</button>
                                        <Link to={`/update/${prod._id}`}>
                                            <button className="btn bg-[#E59285] hover:bg-[#E59285] text-white">Update</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    {isLoading ? (
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
                            <div className="hero w-2/3 h-2/3">
                                <div className=""></div>
                                <div className="hero-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hey Book Lover</h1>
                                        <p className="mb-5 text-xl ">
                                            There is nothing to show <br /> Add Some Book For Explore
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllBooks;
