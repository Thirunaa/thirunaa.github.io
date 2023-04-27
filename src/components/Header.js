import React from "react";
// eslint-disable-next-line
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useStyles } from "../styles/HeaderStyles.js";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import { Link, NavLink, withRouter } from "react-router-dom";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../utils/resumeData.js";
import CustomButton from "./CustomButton";

function Header({ props }) {
  const classes = useStyles();
  const pathname = props?.location?.pathname;
  return (
    <Navbar expands="lg" sticky="top" className={classes.header}>
      <Nav.Link className={classes.header_navlink} as={NavLink} to="/">
        <Navbar.Brand className={classes.header_home}>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className={classes.header_left}>
          <Nav.Link as={NavLink} to="/" className={pathname === "/" ? classes.header_link_active : classes.header_link}>
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathname === "/portfolio" ? classes.header_link_active : classes.header_link}
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className={classes.header_right}>
          {resumeData.data.social.map((key) => (
            <a key={key.text} href={key.link} target="_blank" rel="noreferrer">
              {key.icon}
            </a>
          ))}
          <CustomButton text={"Hire Me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
