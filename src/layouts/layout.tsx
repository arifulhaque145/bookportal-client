// src/components/Layout.tsx

import React, { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./nav-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
