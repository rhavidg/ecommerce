import React, { useContext } from 'react';
import { Container, Wrapper, CartContainer } from './styles';
import { CartContext } from '../../context/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  return (
    <Container>
      <Wrapper>
        <h1>Meu Carrinho</h1>
        <CartContainer>
          {cart.length > 0 && (
            <>
              {cart.map((cart) => {
                return (
                  <TableRow>
                    <TableCell align="center">
                      <img src={cart.img} alt="" className="" />
                    </TableCell>
                    <TableCell align="center">{cart.name}</TableCell>
                    <TableCell align="center">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(cart.price)}
                    </TableCell>
                  </TableRow>
                );
              })}
              <button
                type="submit"
                className="btn-clear-cart"
                onClick={() => clearCart()}
              >
                Limpar carrinho
              </button>
            </>
          )}
          {!cart.length && (
            <>
              <h1>Sem Produtos</h1>
            </>
          )}
        </CartContainer>
      </Wrapper>
    </Container>
  );
}

export default Cart;
