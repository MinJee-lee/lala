import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <div className="content">
          <div className="content--inner">
            
            <h2>Project</h2>
            <ul>
              <li>About <a href="https://www.notion.so/About-8d5c7b76a2ba417d83e2b3f3b6df6452">About</a> </li>
              <li>My <a href="https://github.com/MinJee-lee">github</a> </li>
              <li>project <a href="https://www.notion.so/Spring-Security-89ea86cd73574443addf32c18e2de111">Spring Security</a> </li>
            </ul>
            <h2>Posts this project is mentioned</h2>
            <ul>
              <li><em>Coming soon....</em></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About