import React from 'react';

// if we are just passing data via props and rendering it here, we
// migth as well use a <<stateless component>> instead of extending
// the whole <<React.Component>> library which would be an overkill

const Header = (props) => (
  <header className='top'>
    <h1>
      Catch
      <span className='ofThe'>
        <span className='of'>Of</span>
        <span className='the'>The</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>
        {props.tagline}
      </span>
    </h3>
  </header>
);

export default Header;
