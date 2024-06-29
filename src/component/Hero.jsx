
import React from 'react';
import './star.css'; 

const Hero = () => {
  const imgStyle = {
    width: '100%', 
    height: 'auto', 
    maxWidth: '950px', 
  };

  return (
    <div className="hero">
      <h1>Welcome to My Website</h1>
      <p>Ready to buy things so just start your shopping!!</p>
      <img src="src/assets/img1.png" alt="Welcome" style={imgStyle} />
      
    </div>
  );
};

export default Hero;
