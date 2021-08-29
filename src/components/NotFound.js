import React, { Component } from 'react';
import 'rsuite/lib/styles/index.less';
import { Navbar, Nav, Icon, Content, Footer, FlexboxGrid, Panel, Container, Placeholder  } from 'rsuite';
import { motion } from "framer-motion"
function NotFound() {
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
          <Panel header={<h3 style={{color:"#EEEEEE"}}>Uh oh! 😕</h3>} bordered style={{ position: "fixed", top: "50%",  left: "50%",   transform: "translate(-50%, -50%)"}} >
          <p>The page you are looking for does not exist.</p>
          </Panel>

          </FlexboxGrid.Item>
        </FlexboxGrid>

    </Content>
    </Container>
    </motion.div>
  );
}

export default NotFound;
