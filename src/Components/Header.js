import React from 'react';
import './styles.css';

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="https://github.com/Onionie?tab=repositories">
              Github Logo
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/onionie/">LinkedIn Logo</a>
          </li>
          <li>
            <a className="contact" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;