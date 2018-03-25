import React,{ Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            data:""
        }
        this.onChangehandler = this.onChangehandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onChangehandler(e){
        console.log("on change handler is being",e.target.value);
        this.setState({data:e.target.value});
    }
    onClickHandler(e){
        console.log("this function is getting called in onclick handler",e);
    }
    render(){
        return(
            <div>
                <p>this is the home page </p>
                <p>this is the section{this.props.ctr}</p>
                <input onChange={this.onChangehandler} placeholder="add the data"/>
                <button id ="one" onClick={this.props.incrementcounter}>INCREMENT</button>
                <button id ="two" onClick={this.props.decrementcounter}>DECREMENT</button>
                <button id ="three" onClick={()=>this.props.addResult(this.state.data)}>Add Data</button>
                {this.props.result.map((value,i)=>{
                    return(
                        <p onClick={()=>this.props.deleteResult(value)} key={i}>{value}</p>
                    )
                }   
                )}
            </div>    
        )
    }
}

const mapStateToProp=state=>{
    return{
        ctr:state.counter,
        result:state.result
    } 
}

const mapDispatchToProps=dispatch=>{
    return{
        incrementcounter:()=>dispatch({type:"INCREMENT"}),
        decrementcounter:()=>dispatch({type:"DECREMENT"}),
        addResult:(data)=>dispatch({type:"ADD_DATA",payload:data}),
        deleteResult:(data)=>dispatch({type:"DELETE_DATA",payload:data})
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Home);