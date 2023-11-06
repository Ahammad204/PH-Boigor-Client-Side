import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const AddCategory = () => {


    const { user } = useContext(AuthContext)
    if (user?.email !== import.meta.env.VITE_ADMIN_EMAIL) {

        return <Navigate to={"/"}></Navigate>

    }


    const handleAddCategory = event => {

        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;

        const newCategory = { name, photo }

        console.log(newCategory);

        //send data to the server
        fetch('http://localhost:5000/category', {

            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(newCategory)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Category Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }

            })

        // form.reset();

    }


    return (
        <div>
            <div className=" p-10">
                <h2 className="text-3xl font-extrabold text-center mb-6">Add a Book Category</h2> <hr />
                <form onSubmit={handleAddCategory} className="mt-4">

                    {/* Name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" required placeholder="Category name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-full ml-4">
                            <label className="label">
                                <span className="label-text">Category img</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="photo" required placeholder="Photo Url" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>






                    <input className="btn btn-block text-white bg-[#E59285] hover:bg-[#E59285] " type="submit" value="Add Brand" />
                </form>
            </div>
        </div>
    );
};

export default AddCategory;