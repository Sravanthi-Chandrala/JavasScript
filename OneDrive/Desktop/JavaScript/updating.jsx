import React from "react";
import LifecycleB from './LifecycleB'

class LifecycleA extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: 'sravanthi'
        }
        console.log('LifecycleA Constructor')
    }


    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA from static getDerivedStateFromProps')
        return null;
    }


    componentDidMount(){
        console.log('LifecycleA componentDidMount')

    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getsnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changestate=()=>{
        this.setState({
            name: 'Srav'
        })
    }

    render(){
        console.log('LifecycleA render')
        return(
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changestate}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA;