class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUmount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  }

  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}
