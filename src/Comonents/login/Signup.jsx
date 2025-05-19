import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from '../../firebase.config';
import { useState } from 'react';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up successfully");
    setError('');
  } catch (error) {
    console.log("Error signing up", error.message);
    setError(error.message);
  }
};

  return (
    <div className='flex items-center justify-center min-h-screen  '>
      <div className='bg-white shadow-md p-8  w-100'>
        <div className='mb-6 '>
          <h1 className='text-purple-500 text-3xl font-bold text-center border-b-2 py-2'>SIGN UP</h1>
        </div>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        <div className="mt-4 text-center">
          <p className="text-gray-700 text-sm">
            Already have an account?
            <a href="#" className="text-purple-500 hover:text-purple-700 font-bold ml-1 focus:outline-none focus:shadow-outline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
