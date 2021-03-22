import {connect} from 'react-redux'

const List=({data})=>{

    return(
        <div>
            <ul>
                {
                    data.map((e,index)=>{
                        return(
                            <li key={index}>{e}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        data:state.list
    }
}
export default connect(mapStateToProps)(List)