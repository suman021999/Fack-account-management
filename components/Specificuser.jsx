"use client";

import { Button, Card, Input, List, ListItem } from "@material-tailwind/react";
import { useState } from "react";

const Specificuser = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch(`/api/users/${userId}`);

    if (response.ok) {
      const res=await response.json()
      setUserData(res.user);
    } else {
      console.log("error fetching user data");
      setUserData(null);
    }
  };
  return (
    <>
      <div>
        <div className="flex gap-3">
          <div className="w-72 text-white">
            <Input
               label="Enter User ID"
               color="white"
               value={userId}
               onChange={(e)=>setUserId(e.target.value)} 
               />

              

               
          </div>
          <Button onClick={fetchUserData}>fetch Data</Button>
        </div>
        {userData ?(userData.map((d)=>(
            <>
            <Card className="w-96 mt-5">
              <List className="bg-black text-white">

                <ListItem className="hover:text-white hover:bg-blue-gray-500">ID: {d.id}</ListItem>

                <ListItem className=" hover:bg-blue-gray-500 hover:text-white">Name: {d.name}</ListItem>


                <ListItem className="hover:bg-blue-gray-500 hover:text-white">Age: {d.age}</ListItem>

                <ListItem className="hover:bg-blue-gray-500 hover:text-white">Email: {d.email}</ListItem>

                <ListItem className="hover:bg-blue-gray-500 hover:text-white">Password: {d.password}</ListItem>
              </List>
            </Card>
            </>
          ))
          ):(
              <p className="mt-2">Search for a specific user</p>
          )}
      </div>
    </>
  );
};

export default Specificuser;
