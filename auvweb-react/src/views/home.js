import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>AUVweb</title>
        <meta property="og:title" content="AUVweb" />
      </Helmet>
      <div className="home-container01">
        <span className="home-text">Область состояния робота</span>
        <div className="home-container02">
          <button className="home-button button">Курс</button>
          <button className="home-button01 button">10</button>
        </div>
        <div className="home-container03">
          <button className="home-button02 button">
            <span>
              <span>Глубина</span>
              <br></br>
            </span>
          </button>
          <button className="home-button03 button">Button</button>
        </div>
        <div className="home-container04">
          <button className="home-button04 button">Марш</button>
          <button className="home-button05 button">Button</button>
        </div>
        <div className="home-container05">
          <button className="home-button06 button">Лаг</button>
          <button className="home-button07 button">Button</button>
        </div>
        <div className="home-container06">
          <button className="home-button08 button">
            <span>
              <span>Крен</span>
              <br></br>
            </span>
          </button>
          <button className="home-button09 button">Button</button>
        </div>
        <div className="home-container07">
          <button className="home-button10 button">Дифферент</button>
          <button className="home-button11 button">Button</button>
        </div>
        <div className="home-container08">
          <button className="home-button12 button">Dropper</button>
          <button className="home-button13 button">Button</button>
        </div>
        <div className="home-container09">
          <button className="home-button14 button">Lifter</button>
          <button className="home-button15 button">Button</button>
        </div>
        <div className="home-container10">
          <button className="home-button16 button">Глобальная миссия</button>
          <button className="home-button17 button">лол</button>
        </div>
        <div className="home-container11">
          <button className="home-button18 button">Локальная миссия</button>
          <button className="home-button19 button">Button</button>
        </div>
        <div className="home-container12">
          <button className="home-button20 button">
            <span>
              <span>Transition</span>
              <br></br>
            </span>
          </button>
          <button className="home-button21 button">Button</button>
        </div>
        <div className="home-container13">
          <button className="home-button22 button">Start</button>
          <button className="button">Stop</button>
          <button className="home-button24 button">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Home
