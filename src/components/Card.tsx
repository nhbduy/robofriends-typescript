import React from 'react';

interface CardStatelessProps {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Card: React.SFC<CardStatelessProps> = ({ id, name, username, email }) => {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=150x150`} alt={username} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
