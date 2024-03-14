'use client'

import { Button,Input } from "@material-tailwind/react"
import { useState } from "react"


const DeleteUser = () => {
    const [id,setId]=useState("")
    const handleSubmit=async(e)=>{

        e.preventDefault()

        if(!id){
            alert("please provied User ID to dlelte the user.")
            return
        }


        try {
            const response=await fetch(`/api/users/${id}`,{
                method:"DELETE",
            })

            if(response.ok){
                alert('User successfully deleted')
                clearFrom()
            }
            else{
                const data=await response.json()
                alert(data.result || "something went while deletimg the user ")
            }
            
        } catch (error) {
            alert(error)
        }

    }

    const clearFrom=()=>{
        setId('')
        setName('')
        setEmail('')
        setPassword('')
    }
  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
        <Input 
       color="white"
        label="user ID" 
        type="text" 
        placeholder="userID" 
        value={id}
        onChange={e=>setId(e.target.value)}
        />

        <button className="text-xl text-white mt-2 bg-gray-800 hover:bg-gray-900 px-5 py-2 rounded-[8px]" type="submit">Delete User</button>

        </form>
    </div>
    </>
  )
}

export default DeleteUser
