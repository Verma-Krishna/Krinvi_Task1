import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <div class="h-screen flex items-center justify-center bg-gray-100">
                    <div class="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
                        <h2 class="text-3xl font-bold text-center mb-4">Login</h2>
                        <form action="">
                        <div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    required
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password"  required/>
                            </div>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">Login </button>
                            <span className='text-sm pl-48 tracking-tighter'><Link to="#">Forget Password</Link></span><br/>
                            <span className='text-sm pl-52 tracking-tighter'>New Here?<Link to="/">Create Account</Link></span>
                        </div>
                        </form>    
                    </div>
                </div>
    </>
  )
}
