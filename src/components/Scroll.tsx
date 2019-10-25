import React from 'react';

type Props = {
  children?: JSX.Element
}

const Scroll = ({ children } : Props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
      {children}
      </div>
  );
}

export default Scroll;