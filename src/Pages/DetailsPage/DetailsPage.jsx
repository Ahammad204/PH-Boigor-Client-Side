/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsPage = () => {

    const { id } = useParams()
    const [bookDetails, setBookDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(`http://localhost:5000/book`);
            const data = await response.json();
            const filteredProducts = data.filter((item) => item._id === id);
            setBookDetails(filteredProducts[0]);
            setIsLoading(false);


        };

        fetchData();
    }, [id]);

    const { _id, name, category, quantity, AuthorsName, short,photo } = bookDetails || {}

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
                            <button className="btn bg-transparent text-white hover:bg-[#E59285]  border-2 border-orange-300 hover:border-none font-outfit">Available Books: {quantity}</button>

                        </div>
                        <button  className="btn bg-transparent text-white hover:bg-[#E59285]  border-2 border-orange-300 hover:border-none font-outfit">Add To Cart</button>
                        {/* onClick={handleCart} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;