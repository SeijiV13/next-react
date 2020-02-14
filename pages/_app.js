import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store/store';

import ReduxToastr from 'react-redux-toastr'
const MyApp = (props) => {
    const {Component, pageProps, store } = props;
    return (
       <Provider store={store}>
            <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
         <Component {...pageProps}/>
       </Provider>
    )
}

export default withRedux(initStore)(MyApp);