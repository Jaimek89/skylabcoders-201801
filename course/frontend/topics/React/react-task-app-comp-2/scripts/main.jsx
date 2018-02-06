'use strict';

class TaskApp extends React.Component {
    state = {
        tasks: []
    }

    addTask = (task) => {

        // Método Daniel
        //const { tasks } = this.state
        //this.setState({ tasks: tasks.concat(task) })
        
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.concat(task)
            }
        })

    }

    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => {
                    return index !== _index
                })
            }
        })
    }

    render() {
        return <div>
            <TaskInput onAddTask={this.addTask} />
            <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
        </div>
    }
}

class TaskInput extends React.Component {
    constructor() {
        super()
        
        state = {
            input: ''
        }
    

    }


    keepInput = e => this.setState({ input: e.target.value })

    addTask = () => {
        this.props.onAddTask(this.state.input)

        this.setState({ input: '' })
    }

    render() {
        return <form onSubmit={e => {
            e.preventDefault()

            this.addTask()
        }
        }>
            <input type="text" className="round-blue-input" placeholder="Input task" onChange={this.keepInput} value={this.state.input} />
            &nbsp;
        <button type="submit" className="round-red-button">Add</button>
        </form>
    }
}

class TaskList extends React.PureComponent {
    render () {
        return <ul>
            {this.props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
                e.preventDefault()
    
                this.props.onRemoveTask(index)
            }}>🗑</a></li>)}
        </ul>
    }
}

/*
<div>
    <InputTask />
    <TaskList />
</div>
*/

ReactDOM.render(<TaskApp />,
    document.getElementById('root'))