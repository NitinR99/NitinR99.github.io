import React, { Component, useEffect, useState } from 'react';
import 'rsuite/lib/styles/index.less';
import { Navbar, Nav, Icon, IconButton, Content, Footer, FlexboxGrid, Panel, Container, Placeholder, Button, Col, Tag  } from 'rsuite';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { perval } from "../data/projectValues";
function Projects() {
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

 var isMobile = windowDimension <= 900;

 const [personal, setPersonal]= useState(true);
  const [academic, setAcademic]= useState(false);
   const [contract, setContract]= useState(false);
   const click1= () => {
     setPersonal(true);
     setAcademic(false);
     setContract(false);
   };
   const click2= () => {
     setPersonal(false);
     setAcademic(true);
     setContract(false);
   };
   const click3= () => {
     setPersonal(false);
     setAcademic(false);
     setContract(true);
   };
  return (
    <motion.div
    initial={{ opacity:"0%" }}
animate={{ opacity:"100%" }}
transition={{ duration: 1 }}
    >
    <Container style={{ color: "#EEEEEE"}}>
      <Content>
        <FlexboxGrid justify="center" align="middle"  >
          <FlexboxGrid.Item colspan={12}>
            <Panel header={<h3 style={{color:"#EEEEEE", textAlign:"center"}}>Projects</h3>} bordered >
            {isMobile ? (
              <FlexboxGrid justify="center" align="middle">
                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                  <Button appearance="subtle" active={personal} onClick={click1} block>Personal</Button>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                  <Button appearance="subtle" active={academic} onClick={click2} block>Academic</Button>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item componentClass={Col} colspan={24} md={6}>
                  <Button appearance="subtle" active={contract} onClick={click3} block>Contract</Button>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            ):(
            <FlexboxGrid justify="center" style={{color:"#EEEEEE", textAlign:"center"}}>
              <FlexboxGrid.Item colspan={4}><Button appearance="subtle" active={personal} onClick={click1}>Personal</Button></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}><Button appearance="subtle" active={academic} onClick={click2}>Academic</Button></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}><Button appearance="subtle" active={contract} onClick={click3}>Contract</Button></FlexboxGrid.Item>
            </FlexboxGrid>)}<br/><br/>
            {personal &&
              <motion.div
              initial={{ opacity:"0%" }}
              animate={{ opacity:"100%" }}
              transition={{ duration: 1 }}
              >
              <FlexboxGrid justify="space-around">
              {perval.personal.map((data, key) => {
                return (
                  <FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
                    <Panel header={data.name} shaded>
                      <p>{data.description}</p><br/>
                      {data.github != null && data.github !== "private"?
                      <IconButton
                          style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                          icon={<Icon icon="github" />}
                          href={data.github}
                          target="_blank"
                          size="lg"
                          />:null}
                          {data.github === "private"?
                            <Tag style={{backgroundColor:"black", color:"white"}}>🚧 In development</Tag>:null
                          }
                          {data.website !== "" ?
                          <IconButton
                              style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                              icon={<Icon icon="globe" />}
                              href={data.website}
                              target="_blank"
                              size="lg"
                              />:null}
                    </Panel>

                  </FlexboxGrid.Item>

                );
              })}
              </FlexboxGrid>

              </motion.div>}

            {academic &&
              <motion.div
                initial={{ opacity:"0%" }}
                animate={{ opacity:"100%" }}
                transition={{ duration: 1 }}
              >
              <FlexboxGrid justify="space-around">

              {perval.academic.map((data, key) => {
                return (
                  <FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
                    <Panel header={data.name} shaded>
                      <p>{data.description}</p>
                      {data.github != null && data.github !== "private"?
                      <IconButton
                          style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                          icon={<Icon icon="github" />}
                          href={data.github}
                          target="_blank"
                          size="lg"
                          />:null}
                          {data.github === "private"?
                            <Tag style={{backgroundColor:"black", color:"white"}}>🚧 In development</Tag>:null
                          }
                          {data.website !== "" ?
                          <IconButton
                              style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                              icon={<Icon icon="globe" />}
                              href={data.website}
                              target="_blank"
                              size="lg"
                              />:null}
                    </Panel>
                  </FlexboxGrid.Item>

                );
              })}

              </FlexboxGrid>
            </motion.div>}

            {contract &&
              <motion.div
                initial={{ opacity:"0%" }}
                animate={{ opacity:"100%" }}
                transition={{ duration: 1 }}
              >
              <FlexboxGrid justify="space-around">

              {perval.contract.map((data, key) => {
                return (
                  <FlexboxGrid.Item componentClass={Col} colspan={24} md={8}>
                    <Panel header={data.name} shaded>
                      <p>{data.description}</p>
                      {data.github != null && data.github !== "private"?
                      <IconButton
                          style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                          icon={<Icon icon="github" />}
                          href={data.github}
                          target="_blank"
                          size="lg"
                          />:null}
                          {data.github === "private"?
                            <Tag style={{backgroundColor:"black", color:"white"}}>🚧 In development</Tag>:null
                          }
                          {data.website !== "" ?
                          <IconButton
                              style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                              icon={<Icon icon="globe" />}
                              href={data.website}
                              target="_blank"
                              size="lg"
                              />:null}
                    </Panel>
                  </FlexboxGrid.Item>

                );
              })}

              </FlexboxGrid>
              </motion.div>}


            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  </motion.div>
  );
}

export default Projects;
