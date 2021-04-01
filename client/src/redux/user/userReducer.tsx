export const initialState = null

export const user1Reducer = (state:string, action:any) => {
    if(action.type === "USER"){
        return action.payload
    }
    if(action.type === "CLEAR"){
        return null
    }

    return state
}