import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import loginApi, {User} from './../../data/login.api';
import {GlobalContext} from '../../contexts/GlobalContext';
import {AUTH_STORAGE_KEY, AUTH_AVATAR} from './../../utils/constants';
import {storage} from './../../utils/storage';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import Styled from './Login.styled';

function Login(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {setAuthenticated, setAvatar} = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();
  const {
    TextFieldSize,
    Container,
  } = Styled;

  async function loginIn(username: string, password: string): Promise<void> {
    try {
      setErrorMessage('');
      const user: User = await loginApi(username, password);
      setAvatar(user.avatarUrl);
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
      storage.set(AUTH_AVATAR, user.avatarUrl);
      history.push('/');
    }
    catch (error) {
      setErrorMessage(error.message);
    }
  }

  function onLoginClick(): void {
    loginIn(username, password);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const {name, value} = event.target;
    switch (name) {
      case "username": {
        setUsername(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
    }
  }
  
  const goBack = (): void => {
    history.goBack();
  };

  return (
    <Dialog
      open
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Container>
            {
              errorMessage &&
              <Alert severity="error">{errorMessage}</Alert>
            }
            <TextFieldSize
              id="username"
              name="username"
              label="Username"
              value={username}
              onChange={onChange}
            />
            <TextFieldSize
              id="password"
              name="password"
              label="Password"
              value={password}
              onChange={onChange}
              type="password"
            />
          </Container>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={goBack} color="primary">
          Cancel
        </Button>
        <Button onClick={onLoginClick} color="primary" autoFocus>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Login;
