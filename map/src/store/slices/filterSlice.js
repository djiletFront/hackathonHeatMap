import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/"
import {filterOrders} from "../../utils/filterOrders.func";

export const filterLocationAndOrders = createAsyncThunk(
    'filters/filterLocationAndOrders',
    async function (formData, {rejectWithValue, dispatch}) {
        try {
            const {data: locationData} = await api.form.getCity(formData.cityId)
            const {data: orders} = await api.form.getOrders()
            dispatch(setLocation(locationData))
            dispatch(setInfo(filterOrders(orders, formData)))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = "rejected";
    state.error = action.payload;
}


const filterSlice = createSlice({
    name: "filters",
    initialState: {
        status: null,
        error: null,
        totalOrder: 0,
        totalLatecomers: 0,
        averageTime: 0,
        proceeds: 0,
        ranking: 0,
        coordinates: [59.223991, 39.887175],
        orders: []
    },
    reducers: {
        setLocation(state, action) {
            state.coordinates = action.payload.point
        },
        setInfo(state, action) {
            state.totalOrder = action.payload.totalOrder
            state.totalLatecomers = action.payload.totalLatecomers
            state.averageTime = action.payload.averageTime
            state.proceeds = action.payload.proceeds
            state.orders = action.payload.filteredOrders
            state.ranking = action.payload.ranking
        }
    },
    extraReducers: {
        [filterLocationAndOrders.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [filterLocationAndOrders.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.location = action.payload;
        },
        [filterLocationAndOrders.rejected]: setError,
    }

})

const {setLocation, setInfo} = filterSlice.actions;

export default filterSlice.reducer;