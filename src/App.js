import React from 'react';
import './App.css';
import './profile.png';
import CustomButton from './CustomButton';

const skill = [
  {
    "id": 1,
    "skills": "HTML + CSS 👉",
    "color": 'red'
  },
  {
    "id": 2,
    "skills": "Javascript 👉",
    "color": 'yellow'
  },
  {
    "id": 3,
    "skills": "HTML + CSS 👉",
    "color": 'green'
  },
  {
    "id": 4,
    "skills": "Javascript 👉",
    "color": 'purple'
  },
  {
    "id": 5,
    "skills": "HTML + CSS 👉",
    "color": 'pink'
  },
  {
    "id": 6,
    "skills": "Javascript 👉",
    "color": 'grey'
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <img src={require('./profile.png')} alt="profile" />
        </div>
        <header>
          <h2>EfteKher Ali Efte</h2>
        </header>
        <div className='para'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt similique, consequatur debitis ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed nisi, dolorum deleniti ipsa est voluptate? Voluptatum distinctio maxime soluta.</p>
        </div>
        <div className="skills">
          {skill.map((item) => (
            <CustomButton key={item.id} skills={item.skills} color={item.color} />
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
