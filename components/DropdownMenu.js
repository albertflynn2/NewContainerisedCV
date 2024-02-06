import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-menu">
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      {isOpen && (
        <ul className="menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Add more items as needed */}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
