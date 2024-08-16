import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { adminLogin } from "../../redux/reducers/authSlice";

const AdminLogin = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(user));
    // console.log(user);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#FAF9F7] flex justify-center items-center">
      <div className="w-[500px] p-3 text-slate-100 ">
        <div className="bg-[#128394f1] p-4 rounded-md">
          <h2 className="mb-1 font-semibold text-3xl py-2 text-slate-100 text-center ">
            .. Admin dashboard ..
          </h2>
          <p className="mb-5  text-slate-100 font-semibold font-md text-xl border-b-2 text-center pb-5">
            Please sign in to your account
          </p>
          <form onSubmit={onSubmit}>
            {/* ===== email */}
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                className="px-3 py-2 text-slate-600 outline-none rounded-sm"
                type="email"
                placeholder="E-mail"
                name="email"
                value={user.email}
                onChange={handleInputs}
                required
              ></input>
            </div>
            {/* ===== password */}
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                className="px-3 py-2  text-slate-600 outline-none rounded-sm"
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                required
              ></input>
            </div>
            <div className="flex flex-col w-full gap-1 p-2 mb-2 text-lg">
              <button className="py-2 w-full bg-[#1F212A] text-slate-200 font-semibold hover:bg-[#215c77] transition-all duration-300 text-xl rounded-md">
                Sign in
              </button>
            </div>

            <div className=" text-slate-200 text-lg p-3 font-medium flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account?
                <Link
                  className="font-bold pl-3 hover:text-[#215c77]"
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
