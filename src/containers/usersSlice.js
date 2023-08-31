import { createSlice } from "@reduxjs/toolkit";

const usersSlice=createSlice({
    name:"users",
    initialState:{
        id:0,
        name:'',
        lname:'',
        stuId:'',
        email:'',
        phno:'',
        address:''
    },
    reducers:{
        setUserSlice:(state,action)=>{
            state=action.payload;
            return state;
        },
        deleteUser:(state,action)=>{
            console.log(state)
            console.log(action)
            state.splice(action.payload.id)
            return state;
        }
    }
})

export const{setUserSlice,deleteUser}=usersSlice.actions;
export default usersSlice.reducer;