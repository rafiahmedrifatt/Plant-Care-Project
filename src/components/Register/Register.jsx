import React from 'react';

const Register = () => {
    const handleRegister = (e) => {
        console.log('btn clicked');
        e.preventDefault()
        const form = e.target;
        const data = new FormData(form)
        const dataObj = Object.fromEntries(data.entries())
        console.log(dataObj);
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
            </div>
        </div>
    );
};

export default Register;