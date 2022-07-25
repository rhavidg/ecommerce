import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  min-width: 60vw;
  margin-left: 20vw;
  margin-right: 20vw;
  border-radius: 10px;
  padding-top: 2.5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 30px;
  input {
    border-radius: 8px;
    height: 30px;
    width: 100%;
  }
  .search {
    height: 35px;
    border-radius: 8px;
    border: 1px solid gray;
    cursor: pointer;
  }
  img {
    height: 80px;
    width: 80px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

export const ProductsContainer = styled.div`
  padding-top: 4rem;
`;
