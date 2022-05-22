import React from "react";
import cl from "./EmptyRepo.module.css";

const EmptyRepo = () => {
    return (
        <div className={cl.noRepos}>
            <img className={cl.noDataIcon} src="/icons/nodata.png" alt="No data Icon" />
            <h2>Repository list is empty</h2>
        </div>
    );
}

export default EmptyRepo;