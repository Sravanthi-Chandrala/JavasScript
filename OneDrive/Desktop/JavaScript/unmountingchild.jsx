import React from "react";
class Child extends React.Component{
   componentWillUnmount(){
    alert('The component named Header is about to be Unmounted')
   }
   render(){
    return(
        <div>
            <h1>Hello World!</h1>
        </div>
    )
   }


}
export default Child;