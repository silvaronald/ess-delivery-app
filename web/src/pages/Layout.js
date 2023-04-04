import React from "react";
import {Outlet} from "react-router-dom";
import Sidemenu from '../components/molecules/sidemenu/Sidemenu'

const Layout = () => {
  return (
    <div>
      <Sidemenu/>
      <Outlet />
    </div>
  );
};

export default Layout;