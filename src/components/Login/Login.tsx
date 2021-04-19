import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

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
            <TextFieldSize id="username" label="Username" />
            <TextFieldSize id="password" label="Password" />
          </Container>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={(): void => { setOpen(false); }} color="primary">
          Cancel
        </Button>
        <Button color="primary" autoFocus>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Login;
