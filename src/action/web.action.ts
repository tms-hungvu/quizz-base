
export const webShowPopup = (data : boolean) => ({
    type: "WEB_SHOW_POPUP",
    payload : data
});

export const webHiddenPopup = (data : boolean) => ({
    type: "WEB_HIDDEN_POPUP",
    payload : data
});