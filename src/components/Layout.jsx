import React from "react";
import Sidebar from "./Sidebar";

import "../scss/components/layout.scss";

const Layout = ({ children }) => {
  return (
    <div className='layout display-flex '>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
