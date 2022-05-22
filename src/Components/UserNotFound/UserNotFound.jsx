import React from "react";
import cl from "./UserNotFound.module.css";

const UserNotFound = () => {
    return (
        <div className={cl.noUser}>
            <img className={cl.noUserIcon} src="/icons/following.jpg" alt="No User Icon" />
            <h2 className={cl.text}>User not found</h2>
        </div>
    );
}

export default UserNotFound;