'use client'

import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react"
import { useState } from "react"
import AllUsers from "./AllUsers"
import Specificuser from "./Specificuser"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
import DeleteUser from "./DeleteUser"

const AccordionUI = () => {
    const [open,setOpen]=useState(1)
    const handleOpen=(value)=>setOpen(open === value ?0:value)
  return (
    <>
    <section className="w-[40rem]">
        <Accordion open={open===1}>
            <AccordionHeader className="hover:text-white text-blue-gray-200" onClick={()=>handleOpen(1)}>
              All Users
            </AccordionHeader>
            <AccordionBody>
                <AllUsers/>
            </AccordionBody>
        </Accordion>

        <Accordion open={open===2}>
        <AccordionHeader className="hover:text-white text-blue-gray-200"  onClick={()=>handleOpen(2)}>
              Search for Specific User
            </AccordionHeader>
            <AccordionBody>
                <Specificuser/>
            </AccordionBody>
        </Accordion>

        <Accordion open={open===3}>
        <AccordionHeader className="hover:text-white text-blue-gray-200"  onClick={()=>handleOpen(3)}>
              Create New User
            </AccordionHeader>
            <AccordionBody>
                <CreateUser/>
            </AccordionBody>
        </Accordion>

        <Accordion open={open===4}>
        <AccordionHeader className="hover:text-white text-blue-gray-200"  onClick={()=>handleOpen(4)}>
              Update User
            </AccordionHeader>
            <AccordionBody>
                <UpdateUser/>
            </AccordionBody>
        </Accordion>

        <Accordion open={open===5}>
        <AccordionHeader className="hover:text-white text-blue-gray-200"  onClick={()=>handleOpen(5)}>
              Delete User
            </AccordionHeader>
            <AccordionBody>
                <DeleteUser/>
            </AccordionBody>
        </Accordion>


    </section>
    </>
  )
}

export default AccordionUI
