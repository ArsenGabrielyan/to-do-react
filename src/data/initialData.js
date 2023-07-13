export const arrActive = JSON.parse(localStorage.getItem("items")) || []
export const arrCompleted = JSON.parse(localStorage.getItem("completed")) || []
export const initialState = {name:"", date:"", errorBox:""}