import React from 'react';
import './Intro.scss';
import heroImg from '../../assets/img/web.png';
import arrowImg from '../../assets/img/arrow.png';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Full-Stack', 'Frontend'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Liz Hajage</h1>
          <h3>
            {' '}
            <span ref={textRef}></span> Developer
          </h3>
        </div>
        <a href="#portfolio">
          <img src={arrowImg} alt="" />
        </a>
      </div>
    </div>
  );
};
