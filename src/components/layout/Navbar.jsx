import React from "react";
import SubMenu from "./SubMenu";

function Navbar() {
  return (
    <nav className="horizontal-menu">
      <ul className="container">
        <li>
          Demos
          <SubMenu
            items={["Post Header", "Post Layout", "Gallery Post", "Video Post"]}
          />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
          </svg>
        </li>
        <li>
          Post
          <SubMenu
            items={["Post Header", "Post Layout", "Gallery Post", "Video Post"]}
          />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
          </svg>
        </li>
        <li>
          Features
          <SubMenu
            items={["Post Header", "Post Layout", "Gallery Post", "Video Post"]}
          />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
          </svg>
        </li>
        <li>
          Categories
          <SubMenu
            items={["Post Header", "Post Layout", "Gallery Post", "Video Post"]}
          />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
          </svg>
        </li>
        <li>
          Shop
          <SubMenu
            items={["Post Header", "Post Layout", "Gallery Post", "Video Post"]}
          />
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
          </svg>
        </li>
        <li>
          Buy Now
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
