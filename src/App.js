import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import Modal from './Modal'
import FinishModal from './FinishModal'
import './style/App.css'

function App() {
  const [modal, setModal] = useState(false)
  const [finishModal, setFinishModal] = useState(false)

  const onClickHandler = () => {
    setModal(true)
  }

  const props = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0.8)'
    },
    to: {
      opacity: 1, 
      transform: 'scale(1)'
    },
    config: {
      duration: 1000,      
    }
  })
  const props2 = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0.8)'
    },
    to: {
      opacity: 1, 
      transform: 'scale(1)'
    },
    config: {
      duration: 400,      
    },
    delay: 900,
  })
  const props3 = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0.8)'
    },
    to: {
      opacity: 1, 
      transform: 'scale(1)'
    },
    config: {
      duration: 400,      
    },
    delay: 1400,
  })

  const videoDisplay = () => {

    let isMobile = {
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };

    if(isMobile.any()) {
      return (
        <div className="fullscreen-video-wrap">
          <video playsInline loop autoPlay muted poster="./media/renterii_190505_landingpg_bg.jpg">
              <source src={require("./media/renterii-web-mobile-cmp.mp4")} type="video/mp4" />
              <source src={require("./media/renterii-web-mobile-cmp.webm")} type="video/webm" />
              <source src={require("./media/renterii-web-mobile-cmp.ogv")} type="video/ogg" />
              <img src={require("./media/renterii_190505_landingpg_bg.jpg")} alt=""/>
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>            
        </div>
      )
    } else {
      return (
        <div className="fullscreen-video-wrap">
          <video playsInline loop autoPlay muted poster="./media/renterii_190505_landingpg_bg.jpg">
              <source src={require("./media/renterii-web-nologo-720cmp.mp4")} type="video/mp4" />
              <source src={require("./media/renterii-web-720cmp.webm")} type="video/webm" />
              <source src={require("./media/renterii-web-720cmp.ogv")} type="video/ogg" />
              <img src={require("./media/renterii_190505_landingpg_bg.jpg")} alt=""/>
              Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>            
        </div>
      )
    }
  }

  return (
    <div className="v-header">
      {videoDisplay()}
      <Modal isOpen={modal} setModal={setModal} setFinishModal={setFinishModal} />
      <FinishModal isOpen={finishModal} setFinishModal={setFinishModal}/>
      <div className="menu">
        <animated.img 
          className={`logo ${(modal || finishModal) && "invisible"}`}
          src={require("./media/Renterii_logo_w.png")} 
          alt="renterii logo"
          style={props}
        />
        <animated.div 
          className={`notify ${(modal || finishModal) && "invisible"}`}
          onClick={onClickHandler}
          style={props2}
        >
          RENT ITEMS
        </animated.div>
        <animated.div 
          className={`social-media ${(modal || finishModal) && "invisible"}`}
          style={props3}
        >
          <a href="https://www.facebook.com/renterii/">
            <i className={`fab fab fa-facebook-f ${modal && "invisible"}`} style={{color: "white", fontSize: 18 }}></i>
          </a>
          <a href="https://www.instagram.com/renteriionline/">
            <i className={`fab fa-instagram ${modal && "invisible"}`} style={{color: "white", fontSize: 20 }}></i>
          </a>
          <a href="https://twitter.com/renterii">
            <i className={`fab fa-twitter ${modal && "invisible"}`} style={{color: "white", fontSize: 20 }}></i>
          </a>
        </animated.div>
      </div>
    </div>
  )
}
export default App;

