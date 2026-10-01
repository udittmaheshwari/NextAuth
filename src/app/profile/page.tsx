"use client";
import {useRouter} from "next/navigation"
import Link from "next/link"
import axios from "axios"
import toast from "react-hot-toast"


export default function profilePage(){
    const router = useRouter()
    const logout = async ()=>{
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful')
            router.push('/login');
        } catch (error:any) {
            console.error(error.message);
            toast.error(error.message)
        }
    }

    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr/>
            <button
            onClick={logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Logout
            </button>
        </div>
    )


}