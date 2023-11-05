/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import BookCategory from "./BookCategory";


const BookCategories = ({ Categories }) => {

    const { _id, photo, name } = Categories || {}


    return (
        <div>
            <h1 className="text-center font-bold text-6xl mb-5"> Our Available <span className="text-[#E59285]">Book Categories</span></h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">

                {

                    Categories?.map(category => <BookCategory key={category._id} category={category}></BookCategory>)


                }


            </div>
        </div>
    );
};

export default BookCategories;