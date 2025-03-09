// import def from "ajv/dist/vocabularies/applicatior/additionalItems";
import React,{use, useState} from "react";
import Luffy from "../images/Luffy.jpg";
const EventBinding=()=>{
const [likes, setLikes] = useState(0);
const handleClick =(event)=>{
    setLikes(likes +1);
};

const[formData, setformData]=useState({name:"",email:""});

const handleChange =(event)=>{
    setformData({...formData,[event.target.name]:event.target.value});

};

const [isZoomed, setIsZoomed]= useState(false);
return(
    <div>
        <button onClick={handleClick}>Like💕{likes}</button>
        <div>
            <h2>register</h2>
            <input 
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            />
            <input 
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            />
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
        </div>
        <div>
            <img
            src={Luffy}
            style={{width: isZoomed? "300px" :"150px",transition: "0.3s"}}
            onMouseOver={()=>setIsZoomed(true)}
            onMouseOut={()=>setIsZoomed(false)}
            
             />
        </div>
    </div>
);
};
export default EventBinding;