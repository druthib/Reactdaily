import React from "react";
import CourseCard  from "./CourseCard";

const course={
    Kaido:{
        title:"Kaido",
        image:"/images/kaido.jpg",
        description: "This is the lesson to defeat kaidooooo ",
    },
    BigMom:{
        title:"BigMom",
        image:"/images/bigmom.jpg",
        description: "This is the lesson to defeat BigMom ",
    },
    Shanks:{
        title:"Shanks",
        image:"/images/shanks.jpg",
        description: "This is the lesson to defeat Shanks",
    },
    BlackBeard:{
        title:"BlackBeaerd",
        image:"/images/blackbeard.jpg",
        description: "This is the lesson to defeat BlackBeard ",
    },
};
const MainContent =({selectedCourse})=>{
    return(
        <>
        <main className="main-content">
            {selectedCourse? (<CourseCard course={course[selectedCourse]}/>
            
        ):(<h2>select a course to view</h2>)}
        </main>
        </>
    );
};

export default MainContent;