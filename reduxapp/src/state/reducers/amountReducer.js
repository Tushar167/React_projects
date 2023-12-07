const INITIAL_STATE = {
    cost: 10000,
}

const reducer = (state = INITIAL_STATE,action)=>{
    if(action.type === 'deposit'){
        return {
            ...state,
            cost: state.cost + action.payload,
        }
    }
    else if(action.type === 'withdraw'){
        return {
            ...state,
            cost: state.cost - action.payload,
        }
    }
    else{
        return state
    }
}

export default reducer