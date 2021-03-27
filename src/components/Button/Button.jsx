import React from 'react';


class Button extends React.Component{
    render(){
        return(
            <span>
                { this.props.children }
            </span>
        );
    }
}

export default Button;