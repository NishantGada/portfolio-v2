import React, { useEffect, useState } from 'react';
import './BackToTopButton.css';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    if (window.history.replaceState) {
      window.history.replaceState(null, null, window.location.href);
    }

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`back-to-top ${visible ? 'active' : ''}`}>
      <a href="#nav" aria-label="Back to top">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </a>
    </div>
  );
}
