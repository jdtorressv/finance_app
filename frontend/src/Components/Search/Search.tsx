import React, { JSX, SyntheticEvent, useState } from 'react'

interface Props {
    search: string | undefined;
    onSearchSubmit: (e: SyntheticEvent) => void;
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search : React.FC<Props> = ({search, onSearchSubmit, handleSearchChange}: Props): JSX.Element => {
  
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={handleSearchChange}></input>
      </form>
    </>
  )
}

export default Search