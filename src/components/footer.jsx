import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>
          {" "}
          <small>Copyright &copy; Frikiweb {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
