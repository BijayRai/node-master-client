import actionTypes from './actionTypes'
import StoreApi from '../api/storesApi'
// import { toastr } from 'react-redux-toastr'
// import Router from 'next/router'

export const getStores = () => (dispatch, getState) => {
  const state = getState()
  if (state.stores.length > 0) {
    console.log('stores cached')
    dispatch(loadStoresSuccess(state.stores))
    return
  }

  return StoreApi.getStores()
    .then(stores => {
      dispatch(loadStoresSuccess(stores))
    })
    .catch(e => {})
}

export const addStore = store => dispatch => {
  return StoreApi.addStore(store)
    .then(res => {
      /*
        On sucess dispatch call and redirect
      */
      // toastr.success('Saved', 'Store Saved Successfully!')
      // Router.push(`/store?params=${res.slug}`, `/store/${res.slug}`)

      dispatch(saveStore(res))
      return res
    })
    .catch(err => {
      // SET 1
      // toastr.error('Error:', err)

      // SET 2
      throw err
    })
}

export const saveStore = store => {
  return {
    type: actionTypes.SAVE_STORE,
    store
  }
}

export const loadStoresSuccess = stores => {
  return {
    type: actionTypes.LOAD_STORES_SUCCESS,
    stores
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const loadForm = store => {
  return {
    type: actionTypes.LOAD_STORE_DATA,
    store
  }
}
