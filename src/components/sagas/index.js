import { all } from "@redux-saga/core/effects";
import { watchUserAsync } from "./user";

export function* rootSaga(){
    yield all([
        watchUserAsync()
    ])
}