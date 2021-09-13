/* eslint-disable jsx-a11y/anchor-has-content */
import { Person, Mail } from '@material-ui/icons';

import './Navbar.scss';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"></a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>054-6887442</span>
          </div>
          <div
            onClick={() => {
              window.open('mailto:' + 'lizamir2@gmail.com', '_self');
            }}
            className="itemContainer link"
          >
            <Mail className="icon" />
            <span>lizamir2@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
