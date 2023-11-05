import Swal from "sweetalert2";


const AddBook = () => {

    const handleAddBook = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name?.value;
        const category = form.category?.value;
        const quantity = form.quantity?.value;
        const AuthorsName = form.AuthorsName?.value;
        const short = form.short?.value;
        const rating2 = parseInt(form.rating2?.value, 10);
        const photo = form.photo?.value;

        const newBook = { name, category, quantity, AuthorsName, short, rating2, photo }

        console.log(newBook);

        //send data to the server
        fetch('http://localhost:5000/book', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newBook)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Book Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                } else{

                    Swal.fire({
                        title: 'No Data',
                        text: 'There is no data available.',
                        icon: 'info',
                        confirmButtonText: 'OK'
                    });

                }

            })

        // form.reset();

    }

    return (
        <div>
            <div className=" p-10">
                <h2 className="text-3xl font-extrabold text-center mb-6">Add a Book</h2> <hr />
                <form onSubmit={handleAddBook} className="mt-4">

                    {/* Name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" required name="name" placeholder="Book name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label className="label">
                                <span className="label-text">Book Category</span>
                            </label>
                            <select name="category" required className="select w-full outline-2 outline-black">
                                <option disabled selected>Choose your Book Category</option>
                                <option>Fiction</option>
                                <option>Mystery</option>
                                <option>Science_Fiction</option>
                                <option>Children_Books</option>
                                <option>Horror</option>
                                <option>Biography</option>
                            </select>
                        </div>
                    </div>
                    {/* Supplier and test */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Quantity Of Book</span>
                            </label>

                            <input type="number" required name="quantity" placeholder="Quantity of Book" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Authors Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" required name="AuthorsName" placeholder="Authors Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* Category and details */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="short" required placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span required className="label-text">Rating</span>
                            </label>
                            <div className="rating" >
                                <input type="radio" name="rating2" value="1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating2" value="2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating2" value="3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating2" value="4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating2" value="5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>

                    {/* Form Photo Url */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <label className="input-group">

                                <input type="text" required name="photo" placeholder="Photo Url" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    <input className="btn btn-block text-white bg-[#E59285] hover:bg-[#E59285] " type="submit" value="Add Book" />
                </form>
            </div>
        </div>
    );
};

export default AddBook;