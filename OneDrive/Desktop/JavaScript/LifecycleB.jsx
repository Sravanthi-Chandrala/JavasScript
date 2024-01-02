import React from "react";

class LifecycleB extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: ' '
        }
        console.log('LifecycleB Constructor')
    }


    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB from static getDerivedStateFromProps')
        return null;
    }


    componentDidMount(){
        console.log('LifecycleB componentDidMount')

    }
    
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getsnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    render(){
        console.log('LifecycleB render')
        return(

            <div>
                <div>LifecycleB</div>
            </div>
        )
    }
}
export default LifecycleB;