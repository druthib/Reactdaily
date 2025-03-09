import React,{useState} from "react";
export  const Databinding =()=>{
    const companyname="capg"
    const n1=333
    const n2=222
    const greet=()=>"yooo wassuppppookieee";
    const courses=[
        "py",
         "js", "cloud",
    ];
    const [message,setmessage]=useState("click the button, dumbo");
    const handleClick=(event)=>{
        setmessage("Button clicked, smartyyy");

    };
    const [isLoggedin,setIsLoggedIn]=useState(false);


    return ( <>
    <header>
         <h1>{companyname}</h1>
         <h2>{isLoggedin?"welcome ho":"loggin,dumbo fr"}</h2>
         <button onClick={()=>setIsLoggedIn(!isLoggedin)}>
            {isLoggedin?"Logout":"Login"}

         </button>
         
            <h2>calculation</h2>
            <p>sum:{n1+n2}</p>
            <h1>function call</h1>

            <h4>{greet()}</h4>
            <ul>
                {courses.map((course,index)=>(
                    <li key={index}>{course}</li>
                ))}
            </ul>
         
         <h1> event binding</h1>
         <h2>{message}</h2>
         <button onClick={handleClick}>Click Me</button>

    </header>
    </>);
};
export default Databinding;