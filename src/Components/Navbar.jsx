import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <h3>
        <FaGlobeAmericas className="nav-icon" />
        My Travel Journal
      </h3>
    </nav>
  );
}
