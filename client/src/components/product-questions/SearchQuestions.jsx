import React, { useState } from 'react';
import styled from 'styled-components';
// import { IoMdSearch } from 'react-icons/io';


const Search = styled.input`

  box-sizing: border-box;
  width: 100%;

  // margin-right: 20px;
  // margin-left: 20px;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;

  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 97% center;
  background-size: 16px;
  border-color: teal;

  outline: none;
  // &:hover {
  //   font-size: 30px;
  // }

`

const SearchContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`




const SearchQuestions = props => {

  const [searchText, setSearchText] = useState('');

  const handleChange = event => {

    let inputValue = event.target.value;

    setSearchText(inputValue);

    props.handlSearchTextChanged(inputValue);
  }

  return (

<SearchContainer>
        <Search
          type="text"
          placeholderTextColor = "red"
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
          onChange={handleChange}
          value={searchText}
        />
</SearchContainer>

  )
}

export default SearchQuestions;

