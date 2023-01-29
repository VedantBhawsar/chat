import React, { useState } from 'react'
import "../App.scss"
import { GrFormUpload } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const MobileNo = e.target[3].value;
        const file = e.target[4].files[0]

        // try {
        //     const res = await createUserWithEmailAndPassword(auth, email, password)
        //     const storageRef = await ref(storage, name);
        //     const uploadTask = await uploadBytesResumable(storageRef, file);

        //     uploadTask.on((error) => {
        //         console.log(error)
        //     },
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        //                 await updateProfile(res.user, {
        //                     displayName: name,
        //                     photoURL: downloadURL
        //                 })

        //                 await setDoc(doc(db, "user", res.user.uid), {
        //                     uid: res.user.uid,
        //                     name,
        //                     email,
        //                     password,
        //                     photoURL: downloadURL
        //                 })
        //                 await setDoc(doc(db, "userChats", res.user.uid, {}))
        //             })
        //         });
        //     navigate("/")
        // } catch (error) {
        //     setError(error)
        //     console.log(error)
        // }
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const date = new Date().getTime();
            const storageRef = ref(storage, `${name + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            name,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            name,
                            email,
                            password,
                            MobileNo,
                            photoURL: downloadURL,
                        });

                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
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
                    <button>Sign Up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>Have An Account? <Link className='Link' to={'/login'}>Login</Link></p>

            </div>
        </div >
    )
}

export default Register