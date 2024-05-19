import React, { useState } from 'react';

export default function Signup() {
    const [showForm, setShowForm] = useState(false);
    const [ signupCompleted, setSignupCompleted ] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        conpassword: '',
    });

    const toggleForm = () => {
        setShowForm(prevShowForm => !prevShowForm);
    };

    const handleSignupSubmit = (event) => {
        const { name, value } = event.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value,
        }));

    };

    const submitHandler = (event) => {
        event.preventDefault();

        setUserData(prevUserData => ({
            ...prevUserData,
            password: '',
            conpassword: ''
        }));
        // Perform password and confirm password validation here

        if (userData.password !== userData.conpassword) {
            alert("Passwords is incorrect.");
            return;
        }
        alert('user created succesfully!')


        setSignupCompleted(true);

        setTimeout(() => {
            setShowForm(false);
        }, 300);
    };
    function logout(){
        if(window.confirm("Do you really want to sign out"))
        {
            setSignupCompleted(false);
        }
        else{
            setSignupCompleted(true);
        }
    }



    return (
        <>
            {signupCompleted ? ( // Show user details if signup is completed
                <div>
                    <button className="btn btn-outline-primary" onClick={logout}><p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '0', marginBottom: '0' }}>{userData.name} <i className="fa-solid fa-user"></i></p></button>
                </div>
            ) : (
                <div className='sign'>
                    <button className="btn btn-sm btn-outline-secondary" onClick={toggleForm} style={{ fontSize: '20px' }}>
                        Signup
                    </button>
                </div>
            )}
            {showForm && !signupCompleted && (
                <div className="modal fade show" style={{ display: 'block', color: 'white' }} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ background: ' rgb(116, 145, 145)' }} >
                            <div className="modal-header">
                                <h5 className="modal-title">Signup Form</h5>
                                <button type="button" className="close" onClick={toggleForm} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body" >
                                <form onSubmit={submitHandler} action='/empdata' method='POST'>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" name='name' value={userData.name} onChange={handleSignupSubmit} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="required exampleInputPassword1" className="form-label">Mail Id</label>
                                        <input type="email" className="form-control" name='email' required="required" value={userData.email} onChange={handleSignupSubmit} />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Password</label>
                                        <input type="password" className="form-control" name='password' value={userData.password} onChange={handleSignupSubmit} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" name='conpassword' value={userData.conpassword} onChange={handleSignupSubmit} />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
