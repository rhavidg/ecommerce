import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.85);
`;

export const Item = styled.button`
  background-color: #fff;
  border-radius: 8px;
  font-size: 1.5rem;
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;
