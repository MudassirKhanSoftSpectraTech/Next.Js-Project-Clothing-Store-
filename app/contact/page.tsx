'use client'

// import { Span } from "next/dist/trace";
import { useState } from "react";

export default function Contact() {

  // const [name,setName]=useState()
  // const [email,setEmail]=useState()
  // const [password,setPassword]=useState()

  // const [error,setError] = useState(false)

    const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handler=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    if(!name  || !email || !password ||  password.length <= 6){
       setError(true)
    }else{
      setError(false)
    }

    
    console.log(`name :`,name," , ",`email :`,email, " , ",`password :`,password);
  }
  
  return (

    
    // <div></div>
    
    
      <div className="bg-blue-600 relative flex items-center pt-40 justify-center h-[900px] ">
        
        <div className="absolute top-51 flex items-center justify-center font-bold text-2xl">
            <h1 className="text-white bg-black p-4 rounded-2xl font-bold ">Contact Us Form </h1>
        </div>

      
      <form onSubmit={handler} className="bg-white   text-black font-bold border p-8 rounded-2xl shadow-lg w-150 space-y-7 ">

       
        <div className="flex flex-col ">
          <label htmlFor="username" className="mb-1  font-bold">
            Full Name :
          </label>
          <input
            type="text"
            id="username"
            // required
            placeholder="Enter Your Name..."
            value={name} onChange={(e)=>setName(e.target.value)}
            className="capitalize border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && !name && <span className="text-red-600 ">Please enter your name ... </span>}
        </div>

       
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-bold">
            Email Address :
          </label>
          <input
            type="email"
            id="email"
            // required
            placeholder="Enter Your Email..."
                  value={email} onChange={(e)=>setEmail(e.target.value)}
            className="lowercase border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && !email  && <span  className="text-red-600 ">Please enter your valid email address .. </span>}
        </div>

        
        <div className="flex flex-col">
          <label htmlFor="tel" className="mb-1 font-bold">
            Password :
          </label>
          <input
            type="password"
            id="pass"
            minLength={6}
            // required
                  value={password} onChange={(e)=>setPassword(e.target.value)}
            //  pattern="[0-9]{4}-[0-9]{4}-[0-9]{3}"
            placeholder="Enter Your Password ... "
            className="border p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error &&  (!password || password.length < 6) && <span className="text-red-600 ">       Password must be at least 6 characters ... </span>}
        </div>

     
        <button
        // onClick={handler}
          type="submit"
          className="w-1/2 text-white bg-black flex items-center justify-center mx-auto  cursor-pointer  p-2 rounded-md hover:bg-blue-800 duration-300 hover:text-black ease-in-out rounded-t-full  "
        >
          Submit
        </button>

      </form>
    </div>
  );
}