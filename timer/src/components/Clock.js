import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentCount: 0,
    }
  }
  
  getInitialState() {
    return { currentCount: 0 };
  }

  componentDidMount() {
    setInterval(this.timer, 1000);
  }
  
  timer = () => {
    // setState method is used to update the state
    this.setState({ currentCount: this.state.currentCount + 1 });
    if (this.state.currentCount === 9 ) alert("Chegou no 9 segudos!")
  }

  render() {
    // You do not need to decrease the value here
    return (
      <div>
        {this.state.currentCount}
      </div>
    )
  }
};

export default Clock;
