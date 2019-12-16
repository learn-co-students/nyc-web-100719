import React from 'react';

class Queue extends React.Component{

    render(){
        return (
        <div className="next-strssr">
            Next Stressr: {this.props.nextStrssr}
          </div>
        )
    }
}

export default Queue;