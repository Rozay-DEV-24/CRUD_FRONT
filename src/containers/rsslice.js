import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';

const rsslice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        getUSer:(state,action)=>{
            state=action.payload
            return action.payload;
        },
        addUser:(state,action)=>{
             state.push(action.payload);
            //  console.log(state);
             return state;
        },
        updateUser:(state,action)=>{
            state.map((item)=>{
                if(item.id===action.payload.id){
                    item.name=action.payload.name;
                    item.lname=action.payload.lname;
                    item.stuId=action.payload.stuId;
                    item.email=action.payload.email;
                    item.phno=action.payload.phno;
                    item.address=action.payload.address
                }
            })
        },
        deleteUser:(state,action)=>{
            console.log(state);
            console.log(action);
            var user = action.payload?.user;
            var id = state.findIndex((f)=>f.id == user.id);
            console.log(id)
            state.splice(id,1)
            // return state;
        }
    }
})

export const {getUSer,addUser,updateUser,deleteUser}=rsslice.actions;
export default rsslice.reducer