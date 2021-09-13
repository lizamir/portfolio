import React from 'react';
import './Skills.scss';
import githubIcon from '../../assets/skills-icon/git.svg';
import emailIcon from '../../assets/skills-icon/email.svg';
import linkedInIcon from '../../assets/skills-icon/linkedin.svg';
import cvIcon from '../../assets/skills-icon/cv.svg';

import Liz from '../../assets/img/liz.jpeg';

export const Skills = () => {
  return (
    <div className="about-container" id="skills">
      <div className="about">
        <section>
          <img src={Liz} alt="about-me" />
        </section>
        <section>
          <div>
            <section className="about-card">
              <h1>
                {' '}
                <span>A</span>bout me...
              </h1>
              <br />
              <p>
                Knowledge and experience in the application single page,
                Creative who is always looking for the next challenge, I also
                have a degree in electrical engineering and electronics and in
                this past year I have been learning full stack.
              </p>
              <br />
              <p>
                I am passionate about working with new technologies and looking
                for a role where I can bring my creative perspectives to the
                forefront that will bring added value. The tools I use are:
                React, Vue-js,Angular, Node.js, MongoDB, Sass, Git and REST Apis
                to name just a few, although I am always excited to pick up new
                experties and expand my stack learning new technologies.
              </p>
              <br />
              <p>
                I have been very into creating since I was little and I am happy
                that here I have the way to combine creativity with programming
                which are two things I am very connected to.
              </p>
            </section>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <section className="links-card">
        <section className="flex">
          <p>Let's Keep in Touch!</p>
          <section>
            <div
              onClick={() => {
                window.open('mailto:' + 'lizamir2@gmail.com', '_self');
              }}
            >
              <img src={emailIcon} title="mail" alt="jj" />
            </div>
            <div
              onClick={() => {
                window.open('https://github.com/lizamir');
              }}
            >
              <img src={githubIcon} title="github" alt="kk" />
            </div>
            <div
              onClick={() => {
                window.open('https://www.linkedin.com/in/liz-hajage/');
              }}
            >
              <img src={linkedInIcon} title="linkdein" alt="" />
            </div>
            <div
              onClick={() => {
                window.location.assign(
                  'https://drive.google.com/file/d/1HQTR9VntqJ-PLaQimFt5jzTkvfz2hD9j/view?usp=sharing'
                );
              }}
            >
              <img src={cvIcon} title="cv" alt="" />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};
