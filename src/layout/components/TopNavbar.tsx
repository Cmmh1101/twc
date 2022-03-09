import React, { useState } from "react";

const TopNavbar = ({ props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return <div>Navbar</div>;
};
export default TopNavbar;
