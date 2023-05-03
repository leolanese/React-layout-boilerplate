import React from 'react';

const Layout = (WrappedLayoutComponent) => {
  return (props) => (
    <div className="container">

      <main>
        <WrappedLayoutComponent {...props} />
      </main>

    </div>
  );
}

export default Layout;
