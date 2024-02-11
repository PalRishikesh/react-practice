import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import { fetchRandomColor } from "./canvasAPI";

const initialState = {
    color:{
        code:'black',
        status:'complete'
    },
    color_opacity:{
        point:0.5
    },
    font:{
        size:16
    },
    fontFamily:{
        family:'fantasy'
    }
};

// This is slice
// createSlice is an API kind of 
export const canvasSlice = createSlice({
    name:'canvas',
    initialState,
    reducers:{
        // 1st argument is current state and 2nd argument is action...
        changeColor:(state, action)=>{
            // Although its seem we are chaning state directly, buts its not ,
            // reduc is using "immer" library to change state internally immutablily, 
            state.color.code = action.payload;
        },
        changeFont:(state,action)=>{
            state.font.size = action.payload;
        },
        changeFontFamily:(state, action)=>{
            state.fontFamily.family = action.payload
        },
        changeOpacity:(state, action)=>{
            state.color_opacity.point = action.payload;
        }
    },
    // Hence we are calling data from api and we don't know the exact action that alls will come here
    extraReducers:(builder)=>{
        builder
        .addCase(paintColorAsync.pending,(state)=>{
            state.color.status = 'loading';
        })
        .addCase(paintColorAsync.fulfilled,(state, action)=>{
            state.color.status = 'complete';
            state.color.code = action.payload
        })
    }
});

// Fetching data from thunk
export const paintColorAsync = createAsyncThunk(
    'canvas/fetchRandomColored',
    async()=>{
        const response = await fetchRandomColor();
        return response.data;
    }
);

// This is selector
export const selectColor =  state=> state.canvas.color.code;
export const selectColorLoading =  state=> state.canvas.color.status;
export const selectFont =  state=> state.canvas.font.size;
export const selectFontFamily = state => state.canvas.fontFamily.family;
export const selectColorOpacity = state => state.canvas.color_opacity.point;


export const {changeColor, changeFont, changeFontFamily, changeOpacity} = canvasSlice.actions;
export default canvasSlice.reducer;