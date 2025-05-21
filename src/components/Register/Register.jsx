import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';

const Register = () => {
    const { createUser, user } = use(AuthContext)
    console.log(user);

    const handleRegister = (e) => {
        console.log('btn clicked');
        e.preventDefault()
        const form = e.target;
        const data = new FormData(form)
        const { email, password, ...rest } = Object.fromEntries(data.entries())
        createUser(email, password)
            .then(() => {
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(rest)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-20">
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">PhotoUrl</label>
                    <input type="text" name='photoUrl' className="input" placeholder="Photo URL" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already Registered? <Link to="/login">Login Now</Link></p>
            </div>
        </div>
    );
};

export default Register;