/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const DetailsPage = () => {

     const { id } = useParams()
    const [bookDetails, setBookDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [todayDate, setTodayDate] = useState(new Date().toISOString().split("T")[0]);
    const [hasBorrowed, setHasBorrowed] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [availableBooks, setAvailableBooks] = useState();

    const { _id, name, category, quantity, AuthorsName, short, photo } = bookDetails || {}

    const { user } = useContext(AuthContext)

    const email = user.email;
    const names = user.displayName;
    const bookId = _id;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`https://ph-boigor-server-side.onrender.com/book`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item._id === id);
            setBookDetails(filteredProducts[0]);
            setAvailableBooks(quantity)

            const borrowedResponse = await fetch(`https://ph-boigor-server-side.onrender.com/borrowed?email=${email}`);
            const borrowedData = await borrowedResponse.json();
            const hasBorrowed = borrowedData.find((borrowed) => borrowed.bookId === bookId);

            setIsLoading(false);
            setHasBorrowed(hasBorrowed);


        };

        fetchData();
    }, [email, quantity, bookId, id]);




    const handleBorrowBook = event => {
        

        event.preventDefault();

        console.log(hasBorrowed)

        if (hasBorrowed) {
            toast.error("You have already borrowed this book.");
            return;
        } else if (isSubmitting) {

            toast.error("You have borrowed this book.");
            setIsSubmitting(false)
            return;

        }
        else {

            setIsSubmitting(true);
            const form = event.target;

            const names = form.names?.value;
            const email = form.email?.value;
            const today = form.today_Date?.value;
            const returnDate = form.return_date?.value;
    
            const newBorrowed = { names, email, today, returnDate, photo, name, category, bookId,quantity }

            console.log(newBorrowed);

            //send data to the server
            fetch('https://ph-boigor-server-side.onrender.com/borrowed', {

                method: 'POST',
                headers: {

                    'content-type': 'application/json'

                },
                body: JSON.stringify(newBorrowed)

            })
                .then(res => res.json())
                .then(data => {

                    console.log(data);
                    if (data.insertedId) {

                        const updatedQuantity = availableBooks - 1;

                        setAvailableBooks(updatedQuantity)

                        toast.success("Book Borrowed SuccessFully");

                        fetch(`https://ph-boigor-server-side.onrender.com/book/${id}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify({ quantity: updatedQuantity })
                        })
                            .then(res => res.json())
                            .then(data => {

                                console.log(data)

                            })


                    } else {

                        toast.error("Oops! Something Went Wrong")

                    }

                })



            // form.reset();
            return;
        }

    }

    console.log(availableBooks)

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${photo})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-zinc-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-teko">{name}</h1>
                        <p className="mb-5 text-lg font-outfit font-medium">{short}</p>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
                            <button className="btn bg-transparent text-white hover:bg-[#E59285]  border-2 border-orange-300 hover:border-none font-outfit">Category {category}</button>
                            <button className="btn h-auto bg-transparent text-white hover:bg-[#E59285]  border-2 border-orange-300 hover:border-none font-outfit"> {AuthorsName}</button>
                            <button className="btn bg-transparent text-white hover:bg-[#E59285]  border-2 border-orange-300 hover:border-none font-outfit"> {quantity < 1 ? 'Out of Stock' : `Available Books: ${quantity || []}`}</button>

                        </div>
                        <div className="">

                            <button
                                className={`btn mr-4 ${quantity === 0 ? 'bg-gray-600 hover:bg-gray-600 border-none cursor-not-allowed  opacity-75 disabled:' : 'bg-transparent'
                                    } text-white hover:bg-[#E59285] border-2 border-orange-300 hover:border-none font-outfit`}
                                onClick={() => {
                                    if (availableBooks > 0) {

                                        document.getElementById('my_modal_1').showModal();
                                    }
                                }}
                               
                            >
                                Borrow
                            </button>




                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <dialog id="my_modal_1" className="modal text-slate-500">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <form onSubmit={handleBorrowBook} className="mt-4">

                                        {/* Name and Email row */}
                                        <div className="md:flex mb-8">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" disabled defaultValue={names} required name="names" placeholder="Enter Your Full Name" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">E-Mail</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="email" disabled defaultValue={email} required name="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                        </div>

                                        {/* Today Date and Return date */}
                                        <div className="md:flex mb-8">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Today</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="date" required name="today_Date" disabled value={todayDate} className="input input-bordered w-full" />
                                                </label>
                                            </div>

                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Return Date</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="date" required name="return_date" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                        </div>



                                        <input className="btn btn-block text-white bg-[#E59285] hover:bg-[#E59285] " type="submit" value="Borrow" />
                                    </form>
                                </div>
                            </dialog>


                                <Link to={`/pdf/${_id}`} >
                            <button className="btn bg-transparent text-white hover:bg-[#E59285]  border-2 border-orange-300 hover:border-none font-outfit">Read</button></Link>
                            

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;