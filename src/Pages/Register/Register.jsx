import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser, saveUserToDB, handleUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role = "user";

    // Password validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter");
      return;
    } else if (!/[\W_]/.test(password)) {
      toast.error("Password must contain at least one special character");
      return;
    }

    // Create user with Firebase
    createUser(email, password)
      .then(() => {
        // Save to MongoDB
        const newUser = {
          name,
          email,
          photo,
          role,
        };

        saveUserToDB(newUser)
          .then((res) => {
            toast.success("User registered successfully! DB");
            navigate("/login");
            console.log("User Create", res);
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to save user to database");
          });
        // Optionally update profile in Firebase (optional)
        handleUpdateProfile(name, photo)
          .then(() => {})
          .catch((err) => {
            console.error("Profile update error:", err);
          });
      })
      .catch((error) => {
        console.error("Firebase register error:", error);
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white border-none bg-[#E59285]  hover:bg-[#E59285] ">
              Register
            </button>
          </div>
          <SocialLogin></SocialLogin>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="text-[#E59285]  font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
