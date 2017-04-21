import React from 'react';
import './home.css';
//import heroImage from '../../images/stock02.jpg'
import HomeLink from '../homeLink';
import {Link} from 'react-router-dom';

/*function HomeImage(){ 
const style = {
    background: `url(${heroImage})`,
    height: 400,
    backgroundSize: 'cover'
 }
 return <div className="hero-image" style={style}>
        <h1 className="tagline">Help a pet in need</h1>
        </div>
}*/

export default function Home(props){
  
  return(
    <div className='home'>
      <div className="hero-image">
        <div className='faded'>
          <h1 className="tagline">Help a pet in need</h1>
        </div>
      </div>
      <div className="home-link-container">
        <HomeLink title="Search" blurb="Search adoptme's registered shelters for a pet to adopt." route="/search"/> 
        <HomeLink title="Register" blurb="Are you a shelter? Register your shelter with adoptme." route="/shelters"/> 
        <HomeLink title="Help" blurb="Help find homes for pets with special needs. " route="/"/>
      </div>
    </div>
    
  )
}