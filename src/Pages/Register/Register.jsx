import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const URL = form.get('photoURL')

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should contain at least one uppercase letter');
            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setRegisterError('Password should have at least one  special character');
            return;
        }





        setRegisterError('');
        setSuccessMessage('');

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user,{
                    displayName: name,
                    photoURL:URL

                })
                .then()
                .catch()
                e.target.reset();
                Swal.fire({

                    text: "Register Successfully",

                    icon: "success",

                    confirmButtonText: "Done",

                });

            })
            .catch(error => {
                console.error(error);

            })
    }
    return (
        <div>

            <div>
                <h2 className="my-10 text-3xl text-center">Register your account</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" placeholder="name"
                            name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" placeholder="photoURL"
                            name="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link className="text-orange-500 font-bold" to='/login'>Login</Link> </p>
            </div>

            {
                successMessage && <p>{successMessage}</p>
            }

            {
                registerError && <p>
                    {registerError}

                </p>
            }






        </div>
    );
};

export default Register;