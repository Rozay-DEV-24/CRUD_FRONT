import { put, takeEvery } from "@redux-saga/core/effects";
import { addUser, deleteUser, getUSer, updateUser } from "../../containers/rsslice";
import { setUserSlice } from "../../containers/usersSlice";
import { createUserAPI, deleteUserAPI, getUserAPI, getUserByIdAPI, updateUserAPI } from "../apis";
import { GET_USERS,GET_USERS_BY_ID,CREATE_USER,UPDATE_USER_BY_ID,DELETE_USER_BY_ID } from "./types";

export function* getUsersSaga(action){
    const user = yield getUserAPI(action.id);
    console.log(user)
    yield put(getUSer(user));
}
export function* getUsersByIdSaga(id){
    const user = yield getUserByIdAPI(id);
    yield put(setUserSlice(user));
}
export function* createUserSaga(action){
    console.log(action)
    yield createUserAPI(action.user);
    yield put(addUser(action.user));
}
export function* updateUserSaga(action){
    yield updateUserAPI(action.user);
    yield put(updateUser(action.user));
}
export function* deleteUserSaga(action){
    // yield deleteUserAPI(action.id);
    yield put(deleteUser(action));
}
export function* watchUserAsync(){
  yield takeEvery(GET_USERS,getUsersSaga)
  yield takeEvery(GET_USERS_BY_ID,getUsersByIdSaga)
  yield takeEvery(CREATE_USER,createUserSaga)
  yield takeEvery(UPDATE_USER_BY_ID,updateUserSaga)
  yield takeEvery(DELETE_USER_BY_ID,deleteUserSaga)
}