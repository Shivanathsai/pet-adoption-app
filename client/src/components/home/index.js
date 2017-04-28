import React from 'react';
import './home.css';
import HomeLink from '../homeLink';

export default function Home(props){
  
  return (
    <div className='home'>
      <div className="hero-image">
        <div className='faded'>
          <h1 className="tagline">Find a new friend</h1>
        </div>
      </div>
      <div className="home-link-container">
        <HomeLink title="Search" blurb="Search adoptme's registered shelters for a pet to adopt." route="/search"/> 
        <HomeLink title="Register" blurb="Are you a shelter? Register your shelter with adoptme." route="/shelters"/> 
        <HomeLink title="Help" blurb="Help find homes for pets with special needs. " route="/search"/>
      </div>
    </div>   
  );
}