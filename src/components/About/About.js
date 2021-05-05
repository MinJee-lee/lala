import React, { Component } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About</h1>
        {/*<FontAwesomeIcon icon={faSearch} className="search" />*/}


        <div className="content">
          <div className="content--inner">
            
            <h2>Github</h2>
            <ul>
              <li>Minjee's <a href="https://github.com/MinJee-lee">github</a> </li>
              </ul>
              <h2>Project</h2>
            <ul>
              <li>Spring-Security, Spring-Boot Project :  <a href="https://www.notion.so/Spring-Security-89ea86cd73574443addf32c18e2de111">Spring Security</a> </li>
              <li>Spring-Boot Project :  <a href="https://github.com/MinJee-lee/ShoppingMall">Shopping Mall</a> </li>
            </ul>
            <h2> Minjee</h2>
            <ul>
            <li>About <a href="https://www.notion.so/About-8d5c7b76a2ba417d83e2b3f3b6df6452">About</a> </li>
              <li><em>Coming soon....</em></li>
            </ul>
          </div> 
        </div>
      </div>
    );
  }
}

export default About