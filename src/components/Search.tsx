import React from 'react';

interface ISearchProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const Search = ({ searchChange }: ISearchProps) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 b--blue bg-lightest-blue'
        type='search'
        placeholder='search robots...'
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
