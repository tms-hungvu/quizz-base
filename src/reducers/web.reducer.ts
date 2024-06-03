'use client'

import { IWeb } from "@/interfaces/web.interface";
export const initialWeb : IWeb = {
    showPopup : false
}


export const initializerWeb = initialWeb;


export const webReducer = (state : IWeb, action : any) => {
    switch (action.type) {
 
     case "WEB_SHOW_POPUP" : { 
        return {
            showPopup : action.payload
        };
     }
     case "WEB_HIDDEN_POPUP" : {
        return {
            showPopup : action.payload
        };
     }
      default:
        return state;
    }
};