import React from "react";
import cl from "./Header.module.css";

const Header = (props) => {
    const { handleKeyPress, inputOnChangeListener, userName } = props;

    return (
        <div className={cl.header}>
            <img className={cl.logo} src="/icons/logo.png" alt="Github Icon" />
            <div className={cl.search}>
                <input type="text" onKeyPress={handleKeyPress} onChange={inputOnChangeListener} value={userName} className={cl.searchField} placeholder="Username" />
                <img src="/icons/search.png" alt="Search Icon" className={cl.searchIcon} />
            </div>
        </div>
    );
}

export default Header;