import React, { useContext, useMemo, useState } from 'react';
import {
  Container,
  ProductsContainer,
  SearchContainer,
  Wrapper,
} from './styles';

import Apple from '../../assets/apple.jpg';
import Pear from '../../assets/pear.jpg';
import Banana from '../../assets/banana.jpg';
import Pineapple from '../../assets/pineapple.jpg';
import Mango from '../../assets/mango.jpg';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartContext } from '../../context/CartContext';

export function Products() {
  const [value, setValue] = useState('');
  const { add } = useContext(CartContext);
  const [produtos, setProdutos] = useState([
    {
      name: 'Maçã',
      price: 5.0,
      img: Apple,
    },
    {
      name: 'Pêra',
      price: 2.5,
      img: Pear,
    },
    {
      name: 'Banana',
      price: 4.3,
      img: Banana,
    },
    {
      name: 'Abacaxi',
      price: 10.0,
      img: Pineapple,
    },
    {
      name: 'Manga',
      price: 7.3,
      img: Mango,
    },
  ]);

  const [filterText, setFilterText] = useState('');
  const filteredProducts = useMemo(() => {
    if (!filterText) {
      return produtos;
    }
    return produtos.filter((product) => {
      return product.name.toLowerCase().includes(filterText.toLowerCase());
    });
  }, [produtos, filterText]);

  function addToCart(product) {
    add(product);
  }

  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <input
            type="text"
            id="search"
            name="search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            type="submit"
            className="search"
            onClick={() => setFilterText(value)}
          >
            Pesquisar
          </button>
        </SearchContainer>

        <ProductsContainer>
          <TableContainer component={Paper}>
            <Table sx={{ width: 650 }} aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Imagem:</TableCell>
                  <TableCell align="center">Nome:</TableCell>
                  <TableCell align="center">Preço:</TableCell>
                  <TableCell align="center">Ação:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => {
                  return (
                    <TableRow>
                      <TableCell align="center">
                        <img src={product.img} alt="" className="" />
                      </TableCell>
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price)}
                      </TableCell>
                      <TableCell align="center">
                        <button
                          type="button"
                          onClick={() => addToCart(product)}
                        >
                          Adicionar ao carrinho
                        </button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </ProductsContainer>
      </Wrapper>
    </Container>
  );
}

export default Products;
