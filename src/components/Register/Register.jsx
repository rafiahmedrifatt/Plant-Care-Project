import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    console.log(error);
    const { createUser, setLoading, update } = use(AuthContext)

    const handleRegister = (e) => {
        console.log('btn clicked');
        e.preventDefault()
        const form = e.target;
        const data = new FormData(form)
        const { name, email, password, photoUrl, } = Object.fromEntries(data.entries())
        const userDataForDB = { email, name, photoUrl }
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (password.length < 6) {
            setError('Password Needs to be more then 6 character')
            setLoading(false)
            return;
        } else if (!passwordRegex.test(password)) {
            setLoading(false)
            setError('Must contain uppercase, lowercase letters, and be at least 6 characters long')
            return;
        } else {
            setError("")
            createUser(email, password)
                .then(() => {
                    fetch('http://localhost:3000/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userDataForDB)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                navigate("/")
                                update(name, photoUrl).then(() => {
                                    Swal.fire({
                                        icon: "success",
                                        title: "Success",
                                        text: "You have registered successfully",
                                    });
                                })
                            }
                        })
                })
                .catch(() => {
                    setLoading(false)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Email Already in use!",
                    });

                })
        }
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" required />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" required />
                    <label className="label">PhotoUrl</label>
                    <input type="text" name='photoUrl' className="input" placeholder="Photo URL" required />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" required />
                    <p className='text-red-500'>{error}</p>
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already Registered? <Link className='border-b-2 border-green-700' to="/login">Login Now</Link></p>
            </div>
        </div>
    );
};

export default Register;