import axios from "axios";
import React from "react";

class HttpRequest extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response.data)
            this.setState({
                posts: response.data
            })
        }).catch(error=>{
            console.log(error)
            this.setState({
                errorMsg:'data not found'
            })
        })
    }

    render(){
        const {posts,errorMsg}=this.state
        return(
            <div>
                {
                    posts.length?
                    posts.map(post=>
                        <div key={post.id}>{post.title}</div>
                    ):null
                }
                {
                    errorMsg?(<div>{errorMsg}</div>):null
                }
            </div>
        )
    }
        
}
export default HttpRequest;