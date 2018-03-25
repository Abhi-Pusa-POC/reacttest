const initialState ={ 
    counter:0,
    result:[]
}

const reducers = (state=initialState,action) =>{
    if(action.type === "INCREMENT"){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    if(action.type === "DECREMENT"){
        return{
            ...state,
            counter:state.counter-1
        }
    }
    if(action.type === "ADD_DATA"){
        console.log("this is the section where i can reach",action.payload);
        return{
            ...state,
            result:state.result.concat(action.payload)
        }
    }
    if(action.type ==="DELETE_DATA"){
        console.log("this is the section which is for deleting the data",action.payload);
        return{
            ...state,
            result:state.result.filter((data)=>action.payload != data)
        }
    }
    return state;
}

export default reducers;