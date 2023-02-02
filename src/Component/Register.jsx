import React, { useState } from 'react'
import "../App.scss"
import { GrFormUpload } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { CSpinner } from '@coreui/react';

const Register = () => {
    const [err, setErr] = useState(false)

    const [spinner, setSpinner] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        setSpinner(true)
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const MobileNo = e.target[3].value;
        const file = e.target[4].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            password,
                            MobileNo,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/login");
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Banana Chat</span>
                <span className='title'>Register</span>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input className='input' type="text" placeholder='name' required />
                    <input className='input' type="email" placeholder='email' required />
                    <input className='input' type="password" placeholder='password' required />
                    <input className='input' type="number" placeholder='Mobile No.' required />
                    <input style={{ display: "none" }} type="file" id='upload' />
                    <label htmlFor="upload">
                        <GrFormUpload className='GrFormUpload' />
                        Add An Avatar
                    </label>
                    <button>
                        {
                            spinner ? <CSpinner /> :
                                <span>Sign In</span>
                        }
                    </button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Have An Account? <Link className='Link' to={'/login'}>Login</Link></p>

            </div>
        </div >
    )
}

export default Register