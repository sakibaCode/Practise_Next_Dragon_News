"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginPage() {

    const {register,handleSubmit,formState:{errors}} =useForm()

    const handleLoginFunc = (data) =>{
        console.log(data,"data");
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                <div className="card-body gap-4">

                    <h2 className="card-title text-2xl font-bold justify-center">Sign in</h2>
                    <p className="text-center text-base-content/50 text-sm -mt-2">
                        Welcome back! Please enter your details.
                    </p>

                    <form  className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit(handleLoginFunc)}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="email"
                                {...register("email")}
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Password</span>
                                            
                            </div>
                            <div className="relative">
                                <input
                                    type= "password"
                                     {...register("password",{required:"Password field is required."})}
                                    placeholder="••••••••"
                                    className="input input-bordered w-full pr-10" 
                                />
                                {
                                    errors.password && (
                                        <p className="text-red-500">{errors.password.message}</p>
                                    )
                                }
        
                            </div>
                        </label>


                        <button
                            type="submit"
                            className={`btn btn-primary w-full `}>Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-base-content/50">
                        Don't have an account?{" "}
                        <Link href={"/register"} className="link link-primary font-medium">Register</Link>
                    </p>

                </div>
            </div>
        </div>
    );
}