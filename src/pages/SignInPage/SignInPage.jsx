import { Link } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import {motion} from "framer-motion"
const SignInPage = () => {
  return (
    <>
      <Header />
    <div className="sign-page  w-fit h-fit mx-auto  p-2">
        <form className="mt-[150px] rounded shadow-xl border p-5">
        <h2 className="text-xl font-bold uppercase w-fit mx-auto p-3 text-[#E53E3E]">login</h2>
      <div className="inputs">
        <motion.input whileFocus={{scale:1.05,border:"1px solid red"}} className="block border bg-[#EBEBEB] w-[350px] focus:outline-none  xsm:w-[250px] p-2 mt-5 rounded" type="email" placeholder="Email Address" required />
        <motion.input whileFocus={{scale:1.05,border:"1px solid red"}} className="block border bg-[#EBEBEB] w-[350px] focus:outline-none  xsm:w-[250px] p-2 mt-5 rounded" type="password" placeholder="Password" required minLength="8" />
        <div className="mt-10 flex justify-between">
          <div className="flex gap-2">
            <input className="cursor-pointer" type="checkbox" id="checkbox" />
            <label className="cursor-pointer" htmlFor="checkbox">Remember Me</label>
          </div>
          <Link className="block text-[#E53E3E] font-semibold">Forget Password?</Link>
        </div>
        <div className="mt-10">
        <button className="block btn w-full border mt-3 p-2 text-center uppercase text-white font-bold rounded bg-red-500">login</button>
        <Link className="btn flex border mt-3 p-2 text-center uppercase text-white font-bold rounded bg-[#385898]">Login with facebook</Link>
     
     </div>
      </div>

      </form>
      </div>
      </>
  );
};

export default SignInPage;
