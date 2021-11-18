import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import finderSlice from "./slices/finderSlice";

export default configureStore({
    reducer: {
        formFilter: filterSlice,
        handleFinder: finderSlice,
    }
})