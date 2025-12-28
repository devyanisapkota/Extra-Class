import React from 'react'

function Login() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center" >Login</h2>
        <div className="mb-6">
        <label className="text-lg font-semibold">Username</label>
       <input type="text" placeholder="Enter Your username" className="border border-gray-300 w-full p-3 rounded-lg"></input>
        </div>
        <div className='mb-6'>
       <label className="text-lg font-semibold">Password</label>
       <input type="password" placeholder="Enter Your password" className="border border-gray-300 w-full p-3 rounded-lg"></input>
        </div>
        <div className="bg-blue-600 text-white text-center w-full p-3 rounded-lg font-semibold hover:bg-blue-700 mb-4 ">
            <input type="submit"value="Log In" ></input>
           
            </div>
             <div>
             <p className="text-center text-sm mt-4 text-gray-600"> Don't have an account?{""}
             </p>
             <div>
              <p className="text-blue-600 cursor-pointer hover:underline text-center"> Sign up {""}</p>
             </div>
        </div>
      </div>
    </div>
  )
}

export default Login
