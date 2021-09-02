import React, { Component } from 'react';
import 'rsuite/lib/styles/index.less';
import { Navbar, Nav, Icon, Content, Footer, FlexboxGrid, Panel, Container, Placeholder,IconButton, Whisper, Tooltip  } from 'rsuite';
import logo from "../images/logo.png";
import { motion } from "framer-motion"
function Home() {
  const linked=(
  <Tooltip>Click here to check out my LinkedIn profile</Tooltip>
);
const gith=(
  <Tooltip>Click here to check out my GitHub profile</Tooltip>
);
const emai=(
  <Tooltip>Click here to check out my resume</Tooltip>
);
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
              <Panel header={<div><img src={logo} alt="animated photo of Nitin" style={{width:"30%",minWidth:"65px",maxWidth:"150px", height:"auto", borderRadius:"100%"}}/><br/><br/><h1 style={{color:"#EEEEEE", fontSize:"30px"}}>Hey there! I'm Nitin Ramesh 👋</h1></div>} bordered style={{ position: "fixed", top: "50%",  left: "50%",   transform: "translate(-50%, -50%)", textAlign:"center"}} >
                <p>I'm a dedicated 4th year undergraduate student at the University of Windsor.</p><br/>
                <Whisper placement="left" trigger="hover" speaker={linked}>
                  <IconButton
                      style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                      icon={<Icon icon="linkedin" />}
                      href="https://www.linkedin.com/in/nitin-r/"
                      target="_blank"
                      size="lg"
                      />
                </Whisper>&nbsp;
                <Whisper placement="bottom" trigger="hover" speaker={gith}>
                  <IconButton
                      style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                      icon={<Icon icon="github" />}
                      href="https://www.github.com/NitinR99"
                      target="_blank"
                      size="lg"
                      />
                </Whisper>&nbsp;
                <Whisper placement="right" trigger="hover" speaker={emai}>
                  <IconButton
                      style={{backgroundColor:"#1f2530", color: "#EEEEEE"}}
                      icon={<Icon icon="file-text-o" />}
                      href="https://drive.google.com/file/d/1A0GLyhwHZUcPQQKzpxIZFHtWvlQF-CnY/view?usp=sharing"
                      size="lg"
                      />
                </Whisper>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>
      </Container>
    </motion.div >
  );
}

export default Home;
