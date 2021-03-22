import { useState } from "react"
import {connect} from 'react-redux'


const Input=({onEnter})=>{
    const [text,setText]=useState('')

     const Click=()=>{
         onEnter(text)
         setText("")
     }
    return(
        <div>
            <input type='text' onChange={(e)=>{setText(e.target.value)}} value={text}/>
            <button onClick={Click}>enter</button>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
        data:state.list
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onEnter:(text)=>{
            dispatch({
                type:'ADD_LIST',
                payload:text
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input)