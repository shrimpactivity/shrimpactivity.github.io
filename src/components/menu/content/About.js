import React from "react";

import CardContainer from "../cards/CardContainer";
import Card from "../cards/Card";

export const About = () => {
  return (
    <div className="menu-content">
      <div className="menu-content-header">
        <p>
          My programming journey began over ten years ago, building Java applets
          and web games which I hosted on my high school computer lab's
          server. Much to my teachers' chagrin, they were accessible by any
          machine on the school network. The situation was only made worse when
          I added high score tables...
        </p>
        <p style={{textAlign: 'center'}}>Needless to say, I've been coding ever since. </p>
        <p style={{textAlign: 'center'}}>Here's what I know:</p>
      </div>

      <CardContainer>
        <Card title="Languages" link="www.google.com">
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
            <div>Client Support</div>
            <div>Agile</div>
            <div>Scrum</div>
            <div>Kanban</div>
            <div>TDD</div>
            <div>Clean Code</div>
          </div>
        </Card>
      </CardContainer>
    </div>
  );
};

export default About;