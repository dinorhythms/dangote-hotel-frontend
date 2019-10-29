import React from 'react';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';
import Footer from '../Footer';
import Error from '../Error';

const Layout = (props) => {
  return (
    <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <main id="content" className="p-5">
        <Error />
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;