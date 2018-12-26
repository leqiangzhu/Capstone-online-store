import React from 'react';
import {createStorte,comineReducers} from 'redus';
import { reducer as formReducer } from 'redux-form';
// import cartReducer from '../product/cart/reducer';
import cartReducer from '../components/cart/reducer';
import productsReducer from '../components/product/reducer';

const rootReducer  =comineReducers({
    cart: cartReducer,
    products: productsReducer,
    form: formReducer,

})
const store=createStorte(
    rootReducer,
     window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()

)

export default store;