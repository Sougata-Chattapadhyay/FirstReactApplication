import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "75vh",
    width: "100vw",
    height: "5vh",
  };
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};
