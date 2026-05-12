"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch("password");

    const handleRegisterFunc = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">

                <div className="card-body gap-4">

                    <h2 className="card-title text-2xl font-bold justify-center">
                        Create Account
                    </h2>

                    <p className="text-center text-base-content/50 text-sm -mt-2">
                        Register to get started.
                    </p>

                    <form
                        className="flex flex-col gap-4 mt-2"
                        onSubmit={handleSubmit(handleRegisterFunc)}
                    >

                        {/* Name */}
                        <label className="form-control w-full">

                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>

                            <input
                                type="text"
                                placeholder="Your name"
                                className="input input-bordered w-full"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                            />

                            {
                                errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )
                            }

                        </label>

                        {/* Email */}
                        <label className="form-control w-full">

                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                            />

                            {
                                errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )
                            }

                        </label>

                        {/* Password */}
                        <label className="form-control w-full">

                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />

                            {
                                errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )
                            }

                        </label>

                        {/* Confirm Password */}
                        <label className="form-control w-full">

                            <div className="label">
                                <span className="label-text">Confirm Password</span>
                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full"
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: (value) =>
                                        value === password || "Passwords do not match"
                                })}
                            />

                            {
                                errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.confirmPassword.message}
                                    </p>
                                )
                            }

                        </label>

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Register
                        </button>

                    </form>

                    <p className="text-center text-sm text-base-content/50">

                        Already have an account?{" "}

                        <Link
                            href={"/login"}
                            className="link link-primary font-medium"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>
        </div>
    );
}