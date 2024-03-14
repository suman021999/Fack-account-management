import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs'

// get specific user

export async function GET(_,res){
   const {id}=await res.params 
   const user=users.filter((u)=>u.id===id)
   return NextResponse.json({user,ok:true})
}

// login

export async function POST(req,res){
   let {name,email,password}=await req.json()
   const {id}=await res.params

   const {
        name:uName,
        email:uEmail,
        password:uPassword,
       }=users.find((u)=>u.id===id)

   if(uName===name && uEmail=== email &&uPassword===password   ){
       return NextResponse.json({result:"successfully logged in "})
   }
   else if(!name || !email || !password){

       return NextResponse.json({result:"please fill all the input fileds"})
   }
   else{
       return NextResponse.json({result:"invalid Creantials"})
   }
   
}

//delete user

export async function DELETE(req,res){
    const {id}= await res.params

    const userIndex=users.findIndex((user)=>user.id===id)

    if(userIndex === -1){
        return NextResponse.json({result:"user not found"},{status:404})
    }

    users.splice(userIndex,1)


    const updateUsersArray=users;

    const updateData=JSON.stringify(updateUsersArray,null,2)

        fs.writeFileSync(
            './app/util/db.js',
            `export const users=${updateData}`,
            'utf-8')

            return NextResponse.json({success:'user succesfully update'})

}