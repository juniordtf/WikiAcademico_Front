// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { NavigationActions, StackActions } from 'react-navigation';
import AppNavigation from '../routes/AppNavigation'
import { observable, action, computed } from 'mobx'


const router = AppNavigation.router;
//const mainNavAction = router.getActionForPathAndParams('drawerStack');
//const initialNavState = router.getStateForAction(mainNavAction);


const initialNavState=AppNavigation.router.getStateForAction(StackActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'loginStack',
	  })],
}))


const navReducer = (state = initialNavState, action) => {
    return router.getStateForAction(action, state);
};


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer
  })

  // return store
  return createStore(rootReducer)
}



