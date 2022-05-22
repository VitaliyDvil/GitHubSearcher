import React from "react";
import cl from "./StartPage.module.css";

const StartPage = () => {
    return (
        <div>
            <img className={cl.searchIcon} src="/icons/search.png" alt="Search Icon" />
            <p className={cl.startPage}>Start with searching</p>
            <p className={cl.startPage}>a Github user</p>
        </div>
    );
}

export default StartPage;