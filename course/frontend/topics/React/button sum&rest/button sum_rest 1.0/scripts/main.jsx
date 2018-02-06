'use strict'

class App extends React.Component {
    state = {
        number: 0
    }

    handleSum = () => {
        this.setState({ number: this.state.number + 1 })
    }

    handleRest = () => {
        this.setState({ number: this.state.number - 1 })
    }

    render() {
        return (
            <div>
                <Label number = {this.state.number} />
                <ButtonUp handleSum = {this.handleSum}/>
                <ButtonDown handleRest = {this.handleRest}/>
            </div>
        )
            
    }
}

class ButtonUp extends React.PureComponent {

    render() {
        return(
            <button onClick={ this.props.handleSum }>+</button>
        )
    }
}

class ButtonDown extends React.PureComponent {

    render() {
        return(
            <button onClick={ this.props.handleRest }>-</button>
        )
    }
}

class Label extends React.PureComponent {
    render() {
        return(
            <p>{ this.props.number }</p>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('root'))