import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-4 text-white text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Website Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
