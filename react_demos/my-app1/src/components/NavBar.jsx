import React from "react";
const NavBar=({onSelectCourse})=>{


return(
    <>
    <nav className="navbar">
        <button onClick={()=>onSelectCourse("Kaido")}>Kaido</button>
        <button onClick={()=>onSelectCourse("BigMom")}>Big Mom</button>
        <button onClick={()=>onSelectCourse("Shanks")}>Shanks</button>
        <button onClick={()=>onSelectCourse("BlackBeard")}>Black Beard</button>
    </nav>
    </>
);};
export default NavBar;