import React, { useContext } from 'react';
import { Container, Item } from './styles';
import {
  AiOutlineShoppingCart,
  AiOutlineOrderedList,
  AiOutlineLogin,
} from 'react-icons/ai';
import { ImExit } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';
import { UserContext } from '../../context/UserContext';

export function Header() {
  const navigate = useNavigate();
  const { setLoggedUser } = useContext(UserContext);
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Container>
      <Item onClick={() => navigate('/login')}>
        <AiOutlineLogin /> Login
      </Item>
      <Item onClick={() => navigate('/')}>
        <AiOutlineOrderedList /> Produtos
      </Item>
      <Item onClick={() => navigate('/carrinho')}>
        <AiOutlineShoppingCart /> Meu Carrinho
      </Item>

      <Item
        onClick={() => {
          logout();
          setLoggedUser({});
          navigate('/login');
        }}
      >
        <ImExit /> Logout
      </Item>
    </Container>
  );
}

export default Header;
