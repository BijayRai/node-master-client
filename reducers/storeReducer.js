import actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export const storeReducer = (state = initialState.stores, action) => {
  switch (action.type) {
    case actionTypes.SAVE_STORE:
      return [...state, action.store]
    case actionTypes.LOAD_STORES_SUCCESS:
      return [...action.stores]
    case actionTypes.UPDATE_STORE_DATA:
      let newState = state
      state.forEach((item, index) => {
        if (item._id === action.store.store._id) {
          console.log('found ittem')

          newState.splice(index, 1, action.store.store)
        }
      })
      // const newState = state.map((store, index) => {
      //   if (store.id === action.store.id) {
      //     store = { ...action.store.store }
      //   }

      //   return store
      // })
      return newState

    default:
      return state
  }
}
