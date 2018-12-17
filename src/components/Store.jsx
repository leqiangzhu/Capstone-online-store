import React from 'react';
import {createStorte,comineReducers} from 'redus';
const rootReducer  =comineReducers({


})
const store=createStorte(
    rootReducer,
     window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()

)

export default store;