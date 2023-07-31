import  { configureStore} from "@reduxjs/toolkit"
import locationReducer from "../redux/locationReducer"

export const store = configureStore({
    reducer:{
        locationReducer
    }
})