import React from "react";
import Stack from "react-bootstrap/Stack";
//import  Button  from 'react-bootstrap/Button';
import "./sideHeader.css";

const sidebarNavItems = [
  {
    icon: <i className="bi bi-file-bar-graph  btn btn-outline-danger "></i>,
  },
  {
    icon: <i className="bi bi-geo-alt btn btn-outline-danger"></i>,
  },
  {
    icon: <i className="bi bi-gear btn btn-outline-danger"></i>,
  },
  {
    icon: <i className="bi bi-calendar3 btn btn-outline-danger"></i>,
  },
  {
    icon: <i className="bi bi-display btn btn-outline-danger"></i>,
  },
];
const SideHeader = () => {
  return (
    <Stack>
      <div className="sidebar_logo">
        <a href="www.geogo.in">
          <i className="fa-brands fa-drupal fa-3x"></i>
        </a>
      </div>

      {sidebarNavItems.map((item, index) => {
        return (
          <a
            className=""
            href="https://www.google.com"
            key={index}
            style={{ margin: "10px " }}
          >
            {item.icon}
          </a>
        );
      })}
      <div
        className=""
        style={{
          float: "end",
        }}
      >
        <a href="https://wwww.google.com" className="">
          <i className="bi bi-box-arrow-right btn "></i>
        </a>
      </div>
    </Stack>
  );
};

export default SideHeader;
