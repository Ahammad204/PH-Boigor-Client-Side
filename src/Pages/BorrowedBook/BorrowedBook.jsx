/* eslint-disable react/prop-types */


const BorrowedBook = ({bookingsItem}) => {

    const {_id,name,category,photo,today,returnDate} = bookingsItem || {}
    console.log(bookingsItem)

    return (
        <div className="card bg-base-100 shadow-xl " key={_id}>
            <figure><img className="w-full h-96" src={photo} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold text-3xl">{name}</h2>
                {/* <p className="text-lg font-medium ">{short}</p> */}
                <p className="text-base font-semibold mt-4">CATEGORY: {category}</p>
                <p className="text-lg font-semibold ">Borrow Date: {today}</p>
                <p className="text-lg font-semibold text-[#E59285]">Return Date:{returnDate}</p>
              
                <div className="card-actions justify-end">
                    {/* <Link to={`/details/${_id}`}>  <button className="btn bg-[#E59285] hover:bg-[#E59285] text-white">Details</button></Link> */}
                    {/* <Link to={`/update/${_id}`}>  <button className="btn bg-[#E59285] hover:bg-[#E59285] text-white">Update</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default BorrowedBook;