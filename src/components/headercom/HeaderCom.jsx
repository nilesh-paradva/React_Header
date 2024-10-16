import React, { Component, useState } from "react";
import LogoCom from "./logocom/LogoCom";
import MenuCom from "./menucom/MenuCom";
import ButtonCom from "./buttoncom/ButtonCom";


const HederCom = () => {

    const [menus, setmenus] = useState(["Home", "About", "Contact", "Blog", "Gallery", "News"])

    return (
        <header>
            <div className="container2">
                <div className="row ali-center">
                    <LogoCom />
                    <MenuCom menusItem={menus} />
                    <ButtonCom />
                </div>
            </div>
        </header>
    );

}

export default HederCom