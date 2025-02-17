import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Correct SVG placed in front of the text */}
        <svg
          className="header-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="1em"
          height="1em"
        >
          <path d="M28.91 5.58A1 1 0 0 0 28 5h-5V3h4V1h-4a2 2 0 0 0-2 2v2h-6.09a6 6 0 1 0-3.6 6.53L17 18.36V30h-2.89A2 2 0 0 0 12 32h2a.36.36 0 0 1 .13 0H24a2 2 0 0 0-2.11-2H19V18.36l6.44-7.72 3.33-4a1 1 0 0 0 .14-1.06zM9 10a4 4 0 1 1 3.86-5H8a1 1 0 0 0-.77 1.64l2.7 3.24A4 4 0 0 1 9 10zm15.2-1H11.8l-1.67-2h15.74z" data-name="10-Cocktail"/>
        </svg>

        <h1 className="center neonText mare noulcentru">
          <span className="neonGold mare noulcentru">SHOT SHOT </span>EVENTS
        </h1>
      </div>
    </header>
  );
}

export default Header;
