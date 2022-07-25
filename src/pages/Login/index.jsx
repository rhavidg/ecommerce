import React, { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { Container, Wrapper } from './styles';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { UserContext } from '../../context/UserContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({});
  const { setLoggedUser } = useContext(UserContext);

  const navigate = useNavigate();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setLoggedUser(user);
      console.log(user);
      navigate('/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoggedUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <Container>
      <Wrapper>
        <h1>Login</h1>
        <OutlinedInput
          placeholder="email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <div className="input">
          <OutlinedInput
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <Button variant="contained" size="large" onClick={login}>
          <Typography variant="subtitle1">Login</Typography>
        </Button>

        <p>Usuário logado: {user?.email ? user.email : 'Nenhum'}</p>
        {errorMessage != null && <p className="error">Erro: {errorMessage} </p>}
      </Wrapper>
    </Container>
  );
}

export default Login;
