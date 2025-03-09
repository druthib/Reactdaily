import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import CourseCard from './components/CourseCard';
import MainContent from './components/MainContent'
import { useState } from 'react';
import Assignment from './components/Assignment';
import styles from "./components/styles.css"
// import Button from './components/propsdemo1';
// import UserProfile from './components/propsdemo1';
// import Greeting from './components/propsdemo1';
// import './components/Databinding';
// import './components/Databinding2';
// import Databinding from './components/Databinding';
// import Databinding2 from './components/Databinding2';
// import EventBinding from './components/EventBinding';
// import EventBinding2 from './components/EventBinding2';

function App() {
  // const handleClick =()=>{
  //   alert("YOuuuu Clickkkedd Meee????");
  // };
  const name="luffy"
  const num1=5
  const num2=10
  function sayhi(){
    return "hellooooooooo";
  }
  const [selectedCourse, setSelectedCourse]=useState(null)
  return (
    <div className='app-container'>
      {/* <Button onClick={handleClick}></Button> */}
        {/* <h1>yayayays</h1>
        <h2>hello {name}</h2>
        <h3>{10+10}</h3>
        <h3>{10+"y"}</h3>
        <p>{num1+num2}</p>
        <p>{sayhi()}</p> */}
        {/* <Databinding/>
        <Databinding2/>
        <EventBinding/>
        <EventBinding2/>
        <Greeting name="luffy"/> */}
        {/* <UserProfile username="nanami" age="20"/> */}
    <Header/>
    <Footer/>
    <NavBar onSelectCourse={setSelectedCourse}/>
    {/* <CourseCard/> */}
    <MainContent selectedCourse={selectedCourse}/>
    {/* <Assignment/> */}
       </div>
       
  );
}

export default App;
