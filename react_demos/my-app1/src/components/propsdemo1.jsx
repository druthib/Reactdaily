// function Greeting(props){
//     return <h1>hello,{props.name}</h1>;
// }
// export default Greeting;

// function UserProfile(props){
//     return(
//         <>
// <h1>User Info</h1>
// <h2>Username:{props.username}</h2>
// <h3>Age:{props.age}</h3>
//         </>
//     );
// };

// export default UserProfile;

function Button({onClick}){
    return <button onClick={onClick}>click Me</button>;
}
export default Button;