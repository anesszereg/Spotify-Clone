import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import Section from '../../Components/SectionsCon/SectionCon'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'

function Home( {spotify} ) {
  return (
    <div className='home'>
      <div className="Home-body">

      <SideBar/>
      <Body spotify={spotify}/>
      </div>


    <Footer/>
      {/* <div className="rightSide">
      <NavBar/>
      <Section/>
      </div>
       */}





      
    </div>
  )
}

export default Home





// de5c92e870dc48ca965b476be5b7be2c