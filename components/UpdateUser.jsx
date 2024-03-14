'use client'
import { Button,Input } from "@material-tailwind/react"
import { useState } from "react"



const UpdateUser = () => {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")



    const handleSubmit=async(e)=>{
        e.preventDefault()

        if(!id){
            alert("please provied User ID")
            return
        }
        
        const requestData={id}

        if(name){
            requestData.name=name
        }

        if(email){
            requestData.email=email
        }

        if(password){
            requestData.password=password
        }

        try {
            const response=await fetch("/api/users",{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })

            if(response.ok){
                alert('User information update successfully')
                setId('')
            }
            else{
                const data=await response.json()
                alert(data.result || "something went while update user information")
            }
            
        } catch (error) {
            alert(error)
        }

    }  

        
  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
       <Input 
       color="white"
        label="ID" 
        type="text" 
        placeholder="ID" 
        value={id}
        onChange={e=>setId(e.target.value)}
        />
<br />
       <Input 
       color="white"
        label="Name" 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={e=>setName(e.target.value)}
        />
<br />
       <Input 
       color="white"
        label="Email" 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />
<br />
       <Input 
       color="white"
        label="password" 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={e=>setPassword(e.target.value)}
        />

        <button className="text-xl text-white mt-2 bg-gray-800 hover:bg-gray-900 px-5 py-2 rounded-[8px]" type="submit">Update User</button>
    </form>
   </div>
    </>
  )

}
export default UpdateUser
