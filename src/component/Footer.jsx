import React from 'react';
import './footer.css';
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <p>Contact At: <a href="mailto:gvanshika170@gmail.com">gvanshika170@gmail.com</a></p>
        </div>
        <div className="social-links">
          <p>Connect with me:</p>
          <ul className="social-list">
            <li><a href="https://www.linkedin.com/in/vanshika-gupta05/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/vanshika.gupta.3323457/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/gvanshika___/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://github.com/gva-cse" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://leetcode.com/gva-cse/" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
            <li><a href="https://www.geeksforgeeks.org/user/gvanshika170/" rel="noopener noreferrer">GeeksforGeeks</a></li>
          </ul>
        </div>
      </div>
      <div className="additional-info">
        <p>Name: Vanshika Gupta</p>
        <p>Roll No: 2102900100167</p>
        <p>Project: ABESIT CRC Project</p>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()}All Rights Reserved.</p>
      </div>
    </footer>
  );
}
