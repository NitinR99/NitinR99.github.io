import React, { Component } from 'react';
import 'rsuite/lib/styles/index.less';
import { Navbar, Nav, Icon, Content, Footer, FlexboxGrid, Panel, Container, Placeholder, Divider, Col, Tag, TagGroup } from 'rsuite';
import { motion } from "framer-motion"
function AboutMe() {
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
              <Panel bordered  >
                <h2 >About Me</h2>
                  <Divider />
                  <FlexboxGrid justify="space-between">
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                      <h3>🎓 Education</h3><br/>
                      <b >Bachelor in Computer Science with Software Engineering (Honours)</b>
                      <p >University of Windsor<br/>Major Average: 91%<br/>2018-Present</p><br/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                      <h3>⚙️ Technical Skills</h3><br/>
                      <TagGroup>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>ReactJS</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>React Native</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Python</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>JavaScript</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Java</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>SQL</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>HTML</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>CSS</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Git</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Node.js</Tag>
                      </TagGroup><br/>
                      <h3>🤝 Soft Skills</h3><br/>
                      <TagGroup>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Teamwork</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Leadership</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Resourceful</Tag>
                        <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "green"}}>Open to criticism</Tag>
                      </TagGroup>
                      <br/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                    <h3>💼 Work Experience</h3><br/>
                    <b>Software Developer (CO-OP)</b>
                    <p>Geotab<br/>Sept 2021-Present</p><br/>
                    <b>Teaching Assistant</b>
                    <p>University of Windsor - School of Computer Science<br/>2019-Present</p><br/>
                    <b>Web Development Student (CO-OP)</b>
                    <p>University of Windsor - IT Services<br/>Jan 2021 - April 2021</p><br/>
                    <b>Online Learning Assistant (CO-OP)</b>
                    <p>University of Windsor - Office of Open Learning<br/>June 2020 - Sept 2020</p><br/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                    <h3>🙋‍♂️ Volunteer Experience</h3><br/>
                    <b>Undergraduate Representaive</b>
                    <p>University of Windsor - School of Computer Science<br/>2018-Present</p><br/>
                    <b>Mentor</b>
                    <p>WinHacks 2021</p><br/>
                    <b>Mentor</b>
                    <p>BorderHacks 2020</p><br/>
                    <b>Mentor</b>
                    <p>StarterHacks 2020</p><br/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                    <h3>👨‍💻 Hackathons</h3><br/>
                    <TagGroup>
                      <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "purple"}}>CitizenHacks 2019</Tag>
                      <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "purple"}}>HackWestern 6</Tag>
                      <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "purple"}}>DeltaHacks 2020</Tag>
                      <Tag style={{backgroundColor:"black", color:"white", borderStyle: "solid", borderColor: "purple"}}>WinHacks 2020</Tag>
                    </TagGroup><br/>
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item componentClass={Col} colspan={24} md={11}>
                    <h3>🏅 Honors & Awards</h3><br/>
                    <b>Dean's Honor Roll</b>
                    <p>August 2019, 2020</p><br/>
                    <b>Outstanding Academic Achievement</b>
                    <p>January 2019, 2020, 2021</p><br/>
                    <b>Outstanding Scholars Candidate</b>
                    <p>May 2019</p><br/>
                    </FlexboxGrid.Item>
                  </FlexboxGrid>

              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Content>

      </Container>

    </motion.div>

  );
}

export default AboutMe;
