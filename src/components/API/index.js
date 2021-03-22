import { useEffect } from "react"
import { connect } from "react-redux"

const Api=({data,fetchData})=>{

    useEffect(()=>{
        const retrieve=async ()=>{
            let fetchh=await fetch('https://jsonplaceholder.typicode.com/todos')
            let response=await fetchh.json()
            await fetchData(response)
            
        }   
        retrieve()
        console.log(data,'data2')
    },[])
    return(
        <div>
            <ul>
                {
                    data.apiData.map(dt=>{
                        return((
                            <li key={dt.id}>{dt.title}</li>
                        ))
                    })
                }
            </ul>
        </div>
        
    )
}

const mapStateToProps=(state)=>{
    return{
        data:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchData:(data)=>{dispatch({
            type:'FETCH_DATA',
            payload:data
        })}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Api)