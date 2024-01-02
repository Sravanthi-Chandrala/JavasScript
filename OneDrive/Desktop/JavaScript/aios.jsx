import React from 'react';
import axios from 'axios';
class ApiRequest extends React.Component{
    constructor(props){
        super(props)
        this.stae={
            data: []
        }
    }

    componentDidMount(){
        let url='https://jsonplaceholder.typicode.com/posts'

        axios.get(url).then((response)=>{

            this.setState({
                data: response.data
            })
        console.log(response.data)

        })
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default ApiRequest;
