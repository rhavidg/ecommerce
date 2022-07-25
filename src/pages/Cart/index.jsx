import React, { useContext, useRef } from 'react';
import { Container, Wrapper, CartContainer } from './styles';
import { CartContext } from '../../context/CartContext';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import '@progress/kendo-theme-default/dist/all.css';

export function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const pdfExportComponent = useRef(null);
  const exportPDFWithMethod = () => {
    let element = document.querySelector('.k-grid') || document.body;
    savePDF(element, {
      paperSize: 'A4',
    });
  };
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <Container>
      <Wrapper>
        <PDFExport ref={pdfExportComponent} paperSize="A4">
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
                  onClick={() => {
                    exportPDFWithComponent();
                  }}
                >
                  Comprar
                </button>
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
        </PDFExport>
      </Wrapper>
    </Container>
  );
}

export default Cart;
