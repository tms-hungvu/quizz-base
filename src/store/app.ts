import { webReducer } from "@/reducers/web.reducer";
import { initializerWeb } from "@/reducers/web.reducer";
import { combineReducers } from "@/utils/combineReducer";

export const initialState = {  web : initializerWeb };
export const rootReducer = combineReducers({  web : webReducer}); 
