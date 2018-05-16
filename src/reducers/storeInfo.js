import * as actionTypes from './../constants/store';

const initialStoreInfo = {};
export default function storeInfo(state=initialStoreInfo,action){
    switch (action.type) {
        case actionTypes.SAVE_STORE_INFO:
            state = action.storeInfo
            return state;
        default:
            return state;
    }
}