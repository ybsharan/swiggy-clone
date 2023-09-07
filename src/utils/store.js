import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/*
install @redux/toolkit and react-redux using npm

Create Store
      -ConfigureStore() - import from RTK

Provide my store to App
      <Provider store = {store} --> import from react-redux

Slice
     -createSlice() - import from RTK
            name : '',
            initialState : {},
            reducers : {
                addItem: (state, action) => {action.payload}
            },

        export const {addITem, removeItem, clearCart} = cartSlice.actions;
        export default cartSlice.reducer;


put that Slice into Store
            {
                reducer:{
                    cart:cartSlice,
                    user:userSlice,
                }
            }

*/
