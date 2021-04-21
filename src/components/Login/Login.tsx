import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import loginApi, {User} from './../../data/login.api';
import {GlobalContext} from '../../contexts/GlobalContext';
import {AUTH_STORAGE_KEY, AUTH_AVATAR} from './../../utils/constants';
import {storage} from './../../utils/storage';
import Alert from '@material-ui/lab/Alert';

const TextFieldSize = styled(TextField)`
  width: 332px;
`;

const Container = styled.div`
  display: grid;
`;

interface LoginProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login(props: LoginProps): JSX.Element {
  const {open, setOpen} = props;
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {setAuthenticated, setAvatar} = useContext(GlobalContext);
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function loginIn(username: string, password: string): Promise<void> {
    try {
      setErrorMessage('');
      const user: User = await loginApi(username, password);
      setAvatar(user.avatarUrl);
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
      storage.set(AUTH_AVATAR, user.avatarUrl);
      setOpen(false);
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

  return (
    <Dialog
      open={open}
      onClose={(): void => { setOpen(false); }}
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
        <Button onClick={(): void => { setOpen(false); }} color="primary">
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
