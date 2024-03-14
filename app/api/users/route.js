import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from 'fs'


export function GET(){
    const data=users;
    return NextResponse.json({data},{status:200})
}

//4.create user
export async function POST(req,res){
    let {id,name,email,password}=await req.json()

    if(!id||!name||!email||!password){
        return NextResponse.json(
            {result:"required field not found"},
            {status:400}
        )
    }
    else{
        users.push({id,name,email,password})

        const updateUsersArray=users;

        const updateData=JSON.stringify(updateUsersArray,null,2)

        fs.writeFileSync(
            './app/util/db.js',
            `export const users=${updateData}`,
            'utf-8')

            return NextResponse.json({success:'user succesfully created'})
    }
}

// update user
export async function PUT(req,res){
    let {id,name,email,password}=await req.json()

    const userIndex=users.findIndex((user)=>user.id===id)

    if(userIndex=== -1){
        return NextResponse.json({result:"user not found"},{status:404})
    }

    if(name){
        users[userIndex].name=name
    }

    if(email){
        users[userIndex].email=email
    }

    if(password){
        users[userIndex].password=password
    }


    const updateUsersArray=users;

    const updateData=JSON.stringify(updateUsersArray,null,2)

        fs.writeFileSync(
            './app/util/db.js',
            `export const users=${updateData}`,
            'utf-8')

            return NextResponse.json({success:'user succesfully update'})

}
