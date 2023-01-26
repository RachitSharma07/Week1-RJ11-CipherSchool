import React from "react";
import UserDetails from './UserDetails';

const AllUserList = () => {

    let allUsers = [
        {
            name: "John",
            email: "john@email.com",
            phone: "+91-8685854758"
        },
        {
            name: "nilam",
            email: "nilam@email.com",
            phone: "+91-8885854758"
        },
        {
            name: "vikas",
            email: "vikas@Aemail.com",
            phone: "+91-8585854758"
        },
    ];

    let array = allUsers.map((user, index) => (
        <UserDetails key={index} user={user} />
    ))

    return (
        <div>
            {array}
        </div>
    )
};


export default AllUserList;