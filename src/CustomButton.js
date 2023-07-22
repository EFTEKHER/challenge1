import React from 'react';


const CustomButton = ({ skills, color }) => {
  const buttonStyle = {
    minwidth:'50px',
    
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    backgroundColor: color,
  };

  return (
    <button style={buttonStyle} className="custom-button" onClick={(e)=>alert(`you have cliked ${color} button`)}>
      {skills}
    </button>
  );
};

export default CustomButton;
