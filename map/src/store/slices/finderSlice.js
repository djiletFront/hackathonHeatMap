import {createSlice} from "@reduxjs/toolkit";

const finderSlice = createSlice({
    name: "finder",
    initialState: {
        show: false
    },
    reducers: {
        showFinder(state, action) {
            state.show = true
        },
        closeFinder(state, action) {
            state.show = false
        }
    }
})

export const {showFinder, closeFinder} = finderSlice.actions

export default finderSlice.reducer;