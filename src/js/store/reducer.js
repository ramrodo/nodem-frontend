import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { modal } from './reducers';
import { user } from '../pages/App/store/reducers';
import client from './apolloClient';

const Reducers = combineReducers({
  user,
  modal,
  form: formReducer,
  router: routerReducer,
  apollo: client.reducer(),
});

export default Reducers;
