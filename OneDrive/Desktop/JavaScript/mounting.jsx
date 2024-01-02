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

    render(){
        console.log('LifecycleA render')
        return(
            <div>
                <div>LifecycleA</div>
                <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA;