import React from 'react';
import './App.css';
import Profile from './profile/profile';

function App() {
  const Person ={
    FullName:'Lazrag Khouloud',
    Bio: 'Ful stack web developer',
    Pro: 'Web Developer',
    picture:'./photo.png',
  }
  function handleName(){
    alert(Person.FullName)

  }
  return (
    <>
    <Profile Person={Person} ClickMe={handleName}></Profile>
    </>
  )
}

export default App;
