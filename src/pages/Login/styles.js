import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e6e6e6;
  height: 100vh;
  .error {
    color: red;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  min-width: 60vw;
  margin-left: 20vw;
  margin-right: 20vw;
  border-radius: 10px;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 10vh;
  .input {
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
    font-size: 18px;
  }
`;
