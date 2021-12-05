import React, { useState } from 'react';
import { getUserToken } from 'utils/localStorage';
import ModalConfirm from 'components/ModalConfirm';
import { logout } from 'features/user/userSlice';
import { useDispatch } from 'react-redux';

function withErrorHandler(WrappedComponent, axios) {
  return (props) => {
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    axios.interceptors.request.use(
      async (req) => {
        const token = await getUserToken();
        if (token) req.headers.Authorization = `Bearer ${token}`;
        return req;
      },
      (err) => Promise.reject(err),
    );

    axios.interceptors.response.use(
      (res) => res,
      (err) => {
        // console.log('Request Error', err.message);
        // if (err.message) return Promise.reject(err);
        switch (err.response.status) {
          case 400: // Bad Request
            break;
          case 401: // Unauthorized
            setOpenModal(true);
            break;
          case 403: // Unauthorized
            setOpenModal(true);
            break;
          case 404: // Not found
            break;
          case 500: // Internal Server Error
            break;
          default:
            break;
        }
        return Promise.reject(err);
      },
    );

    return (
      <>
        <ModalConfirm
          title="Expired"
          content="Please login again !"
          open={openModal}
          handleClose={() => setOpenModal(false)}
          btnOk={{
            title: 'Login',
            handleClick: () => {
              dispatch(logout());
              window.location = '/login';
            },
          }}
        />
        <WrappedComponent {...props} />
      </>
    );
  };
}

export default withErrorHandler;
