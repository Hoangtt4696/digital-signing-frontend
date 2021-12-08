import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from 'ds-constants';
import { useForm } from 'react-hook-form';
import { loginAsync, selectUser, clearState } from 'features/user/userSlice';
import withLoading from 'utils/withLoading';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SimpleHeader from 'components/SimpleHeader';
import TextField from 'components/TextField';
import Button from 'components/Button';
import { Box, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { getUserToken } from 'utils/localStorage';

const useStyles = makeStyles(() => ({
  root: {
    width: 320,
    marginBottom: 24,
    fontSize: 14,
  },
}));
const useStylesSubmit = makeStyles(() => ({
  root: {
    backgroundColor: COLOR.royalBlue,
    padding: 12,
    fontSize: 16,
  },
}));

const schema = yup.object().shape({
  email: yup.string().trim().email('Email incorrect').required('Email incorrect'),
  password: yup.string().required('Password incorrect'),
});

const Login = ({ setLoading, setSnackbar, setTitle }) => {
  const classes = useStyles();
  const classesSubmit = useStylesSubmit();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = ({ email, password }) => {
    setLoading(true);

    setTimeout(() => {
      dispatch(loginAsync({ email, password }));
    }, 1000);
  };
  const handleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  useEffect(() => {
    setTitle('Login');

    if (getUserToken()) {
      history.push('/home');
    }
  }, []);

  useEffect(() => {
    setLoading(isFetching);
  }, [isFetching]);

  useEffect(() => {
    if (isSuccess) {
      setSnackbar(true, 'success', 'Login success!');

      history.push('/home');
    }

    if (isError) {
      setSnackbar(true, 'error', errorMessage || 'Error');
    }

    dispatch(clearState());
    setLoading(false);
  }, [isSuccess, isError]);

  return (
    <div>
      <SimpleHeader />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <img src="/images/login-logo.svg" alt="logo" />
          <p className="title">Login to Your Dedoco Account</p>
          <p className="subTitle">Please login to your account before signing this document</p>
          <Box display="flex" flexDirection="column" mt={5} width={320}>
            <TextField
              control={control}
              name="email"
              label="Email address"
              variant="outlined"
              size="small"
              classes={classes}
            />
            <TextField
              control={control}
              label="Password"
              variant="outlined"
              name="password"
              type={showPassword ? 'text' : 'password'}
              size="small"
              classes={classes}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      onMouseDown={(event) => {
                        event.preventDefault();
                      }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <p className="link forgotPassword text">Forgot password</p>
            <div>
              <Button classes={classesSubmit} fullWidth type="submit">
                Login
              </Button>
            </div>
            <p className="createAccount text">
              Do not have a account ? <span className="link">Create one</span>
            </p>
            <div className="text term">
              <span>Terms & Conditions</span>
              <span className="circle" />
              <span>Privacy Policy</span>
            </div>
          </Box>
        </Form>
      </Container>
    </div>
  );
};

const Container = styled.div`
  background-color: ${COLOR.mercurysolid};
`;

const Form = styled.form`
  width: 800px;
  height: calc(100vh - 88px);
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${COLOR.white};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  img {
    width: 297px;
  }

  .title {
    font-weight: bold;
    font-size: 32px;
    margin: 10px 0;
    color: ${COLOR.mineShaft};
  }

  .subTitle {
    font-size: 20px;
    color: ${COLOR.emperor};
  }

  .link {
    text-decoration: underline;
  }

  .forgotPassword {
    text-align: right;
    margin-bottom: 16px;
  }

  .createAccount {
    margin-top: 16px;
    margin-bottom: 40px;
  }

  .text {
    color: ${COLOR.emperor};
    font-size: 16px;
  }

  .term {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .circle {
    width: 8px;
    height: 8px;
    background-color: ${COLOR.primaryBlue};
    border-radius: 50%;
  }
`;

export default withLoading(Login);
