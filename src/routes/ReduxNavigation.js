import React from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

// here is our redux-aware our smart component
const ReduxNavigation = (props) =>{
  const { dispatch, state, addListener } = props
  const navigation = {
    dispatch,
    state,
    addListener
  }

  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)


