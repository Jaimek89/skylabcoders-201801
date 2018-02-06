//v 1.2 --> Remove a method from App class

'use strict'

class App extends React.Component {
    state = {
        number: 0
    }

    handleSum = (num) => {
        this.setState({ number: this.state.number + num })
    }

    render() {
        return (
            <div>
                <Label number = {this.state.number} />
                <Button onClick = {() => this.handleSum(1)} literal = 'Suma'/>
                <Button onClick = {() => this.handleSum(-1)} literal = 'Resta'/>
            </div>
        )
            
    }
}

class Button extends React.PureComponent {

    render() {
        return(
            <button onClick={ this.props.onClick }>{this.props.literal}</button>
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