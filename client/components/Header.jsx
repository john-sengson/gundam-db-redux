import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="headerLogo">Gundam React Project</h1>
        <h2 className="subHeaderLogo">Checkout our list of Gundam models below:</h2>
      </div>
    );
  }
}

export default Header;