import React from 'react';
import './Portfolio.scss';
import { useState } from 'react';
import Taskit from '../../assets/img/taskit.gif';
import Appsus from '../../assets/img/appsus.gif';
import Bitcoin from '../../assets/img/bitcoin.gif';
import Arrow from '../../assets/icons/arrow.png';
import Git from '../../assets/icons/git.png';
import App from '../../assets/icons/app.png';

export const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      title: 'Taskit',
      desc: 'A task management application based on Trello,   full implementation of server side and client side.',
      skills: 'Vue.js | Vuex | Sass | Node.js | MongoDB | Express | Websockets',
      img: Taskit,
      git: 'https://github.com/leetalrivlin/task-it',
      web: 'https://taskit-pwa.herokuapp.com/',
    },
    {
      id: '2',
      title: 'Appsus',
      desc: 'Keep track of your notes and Emails, all in one place. ',
      skills:
        'Dynamic vue.js components | Integration between emails and notes',
      img: Appsus,
      git: 'https://github.com/lizamir/App-sus',
      web: 'https://lizamir.github.io/App-sus/#/',
    },
    {
      id: '3',
      title: 'Bitcoin',
      desc: 'A simple virtual wallet, allowing for signup, searching through contacts and transfering money to contacts. ',
      skills: 'React | Redux | Thunk | MongoDB | Express',
      img: Bitcoin,
      git: 'https://github.com/lizamir/bitcoin',
      web: 'https://bitcoin-app-ng.herokuapp.com',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d, idx) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p className="desc">{d.desc}</p>
                  <p className="skills-app">{d.skills}</p>
                  <div className="links">
                    <a href={d.git} target="_blank" rel="noreferrer">
                      <img src={Git} alt="" />
                    </a>
                    <a
                      href={d.web}
                      target="_blank"
                      rel="noreferrer"
                      title="See full project"
                    >
                      <img src={App} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={Arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src={Arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};
