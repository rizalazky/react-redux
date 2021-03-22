import ActionType from './actions'
const redux=require('redux')
const initialState={
    value:0,
    list:[],
    apiData:[]
}

// Reduces
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.ADD_LIST:
            return {
                ...state,
                list:[...state.list,action.payload]
            }
        case ActionType.FETCH_DATA:
            // console.log('terpanggil')
            return{
                ...state,
                apiData:action.payload
            }        
        default:
            return state
    }
}

// Store
const store=redux.createStore(rootReducer)


export default store