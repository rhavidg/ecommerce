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
  img {
    height: 80px;
    width: 80px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .btn-clear-cart {
    margin-top: 1rem;
    height: 35px;
    border-radius: 8px;
    border: 1px solid gray;
    cursor: pointer;
  }
`;
