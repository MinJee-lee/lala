import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <div className="content">
          <div className="content--inner">
            왜 안돌아갈까왜왜
            <h2>여기는 무슨말을 써야할까</h2>
            <ul>
              <li>깃허브주소를 써야겠다 <a href="https://github.com/MinJee-lee">github</a> </li>
              <li>어쩌구저쩌구어쩌구저쩌구 <a href="https://github.com/MinJee-lee">github</a> </li>
            </ul>
            <h2>Posts this project is mentioned</h2>
            <ul>
              <li><em>Coming soon...</em></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About