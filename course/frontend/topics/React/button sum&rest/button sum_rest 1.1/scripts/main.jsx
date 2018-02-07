//v 1.1 --> Use just one button component instead of two

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
                <Button onClick = {this.handleSum} name = 'Suma'/>
                <Button onClick = {this.handleRest} name = 'Resta'/>
            </div>
        )
            
    }
}

class Button extends React.PureComponent {

    render() {
        return(
            <button onClick={ this.props.onClick }>{this.props.name}</button>
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