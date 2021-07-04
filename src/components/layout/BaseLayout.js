import React from 'react';
import {Link} from 'react-router-dom';

const BaseLayout = (props) => {
  return (
    <>
      <ul>
          <li>
              <Link to="/">Home Page</Link>
          </li>
          <li>
              <Link to="/hooks">Hooks Page</Link>
          </li>
          <li>
              <Link to="/classes">Classes Page</Link>
          </li>
      </ul>

      {props.children}
    </>
  )
}

export default BaseLayout
