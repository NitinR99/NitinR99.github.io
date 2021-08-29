import React, { Component, useEffect, useState } from 'react';
import 'rsuite/lib/styles/index.less';
import { Navbar, Nav, Icon, Affix, IconButton, Drawer, Button, Sidenav  } from 'rsuite';
import { NavLink } from "react-router-dom";
function NavigBar() {
  const [windowDimension, setWindowDimension] = useState(null);
const[open, setOpen]=useState(false);
 useEffect(() => {
   setWindowDimension(window.innerWidth);
 }, []);

 useEffect(() => {
   function handleResize() {
     setWindowDimension(window.innerWidth);
   }

   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

 var isMobile = windowDimension <= 700;
  return (
    <Affix>
     {isMobile? (<Navbar appearance="subtle">
                    <Navbar.Body >
                      <Nav pullLeft >
                        <IconButton
                          style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                          icon={<Icon icon="bars" />}
                          onClick={() => {setOpen(true)}}
                          size="lg"
                        />
                      </Nav>
                    </Navbar.Body>
                  </Navbar>
                ) :(
                  <Navbar appearance="subtle" >
                    <Navbar.Body >
                      <Nav pullRight >
                        <NavLink to="/">
                          <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                        </NavLink>
                        <NavLink to="/about">
                          <Nav.Item  icon={<Icon icon="user-o" />} >About Me</Nav.Item>
                        </NavLink>
                        <NavLink to="/projects">
                          <Nav.Item icon={<Icon icon="project" />}>Projects</Nav.Item>
                        </NavLink>
                        <NavLink to="/contact">
                          <Nav.Item icon={<Icon icon="envelope-o" />} >Contact Me</Nav.Item>
                        </NavLink>
                      </Nav>
                    </Navbar.Body>
                  </Navbar>
    )}
     <Drawer full placement="left" show={open} onHide={()=> setOpen(false)}>
      <Drawer.Body>
      <Sidenav appearance="default">
      <Sidenav.Body>
        <Nav>
        <NavLink to="/">
          <Nav.Item style={{color:"#eeeeee"}} onSelect={()=> setOpen(false)}  icon={<Icon icon="home" />} >Home</Nav.Item>
        </NavLink>
        <NavLink to="/about">
          <Nav.Item onSelect={()=> setOpen(false)}  icon={<Icon icon="user-o" />} >About Me</Nav.Item>
        </NavLink>
        <NavLink to="/projects">
          <Nav.Item onSelect={()=> setOpen(false)} icon={<Icon icon="project" />}>Projects</Nav.Item>
        </NavLink>
        <NavLink to="/contact">
          <Nav.Item onSelect={()=> setOpen(false)} icon={<Icon icon="envelope-o" />} >Contact Me</Nav.Item>
        </NavLink>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
      </Drawer.Body>
    </Drawer>

  </Affix>
  );
}

export default NavigBar;
