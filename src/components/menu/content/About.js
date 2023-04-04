import React from "react";

import CardContainer from "../cards/CardContainer";
import Card from "../cards/Card";

const paragraphStyle = {
  color: 'var(--theme-beige)',
  textAlign: 'left',
  fontSize: '1rem',
  padding: '0px 5px 0px 5px'
};

export const About = () => {
  return (
    <div className="menu-content">
      <div className="menu-content-header">
        <p style={{ textAlign: "center" }}>Here's what I know.</p>
      </div>

      <CardContainer>
        <Card title="Languages" height="400px">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>Javascript</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Java</div>
            <div>Python</div>
            <div>SQL</div>
            <div>Scheme</div>
          </div>
        </Card>
        <Card title="Tools">
          <div className="two-column">
            <div>React</div>
            <div>Redux</div>
            <div>React-router</div>
            <div>Jest</div>
            <div>Express</div>
            <div>RESTful APIs</div>
            <div>Mongo</div>
            <div>Npm</div>
            <div>Maven</div>
            <div>JUnit</div>
            <div>Bash</div>
            <div>Git</div>
            <div>Github Actions</div>
            <div>VS Code</div>
            <div>IntelliJ</div>
          </div>
        </Card>
        <Card title="Workflow">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>Stack Overflow</div>
            <div>Scrum</div>
            <div>Agile</div>
            <div>Kanban</div>
            <div>Client Support</div>
            <div>TDD</div>
            <div>Clean Code</div>
          </div>
        </Card>
      </CardContainer>
      <div className="menu-content-header">
        <p style={{ textAlign: "center" }}>More about my journey.</p>
      </div>
      <CardContainer>
        <Card title="The Beginning">
          <p style={paragraphStyle}>
            I began programming over ten years ago, building Java applets and
            web games which I hosted on my school's lab server. Adding high
            score tables had quite the negative affect on my fellow student's
            productivity...
          </p>
        </Card>
        <Card title="On The Job">
          <p style={paragraphStyle}>
            While working in a customer service position, I took it upon myself
            to reconstruct my department's internal resources site and knowledge
            hub. The company's dev team recognized my talents thanks to the
            success of this project, and I was soon interfacing with them daily
            as we updated our ASP.NET order tracking and invoicing systems.
          </p>
        </Card>
        <Card title="Personal Growth">
          <p style={paragraphStyle}> 
            With this work experience I garnered a deep desire to transition
            completely into an engineer role. I began an independent study of
            modern web development, supplementing my already proficient
            abilities. Soon I knew this process would require my complete
            attention, and for the past few months I've devoted my time entirely
            to rigorous learning and application building.
          </p>
        </Card>
      </CardContainer>
    </div>
  );
};

export default About;
