'use strict'

class TaskApp extends React.Component {

    state = {
        tasks: []
    }

    addTask = (task) => {

        this.setState(prevState => {
            return {
                tasks: prevState.tasks.concat(task)
            }
        })
    }

    removeTask = index => {
        this.setState(prevState => {
            return {
                doneTasks: prevState.doneTasks.concat(prevState.tasks[index]),
                tasks: prevState.tasks.filter((task, _index) => {
                    return index !== _index
                })
            }
        })
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <TaskInput onAddTask={this.addTask} />
                        <button id="checkAll" className="btn btn-success">Mark all as done</button>
                        <hr/>
                        <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
                        <div className="todo-footer">
                            <strong><span className="count-todos"></span></strong> Items Left
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="todolist">
                        <h1>Already Done</h1>
                        <ul id="done-items" className="list-unstyled">
                            <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove"></span></button></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}








class TaskInput extends React.Component {
    constructor() {
        super()

        this.state = {
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
            <input 
                type="text" 
                className="form-control add-todo" 
                placeholder="Add todo"
                onChange={this.keepInput} 
                value={this.state.input}
            />
        </form>
    }
}










function TaskList(props) {
    return <ul id="sortable" className="list-unstyled">
        {props.tasks.map((task, index) => <li key={index} className="ui-state-default">{task} &nbsp; <a onClick={(e) => {
            e.preventDefault()

            props.onRemoveTask(index)
        }}>🗑</a></li>)}
    </ul>
}




function DoneTaskList(props) {
    return <ul id="done-items" className="list-unstyled">
        {props.tasks.map((task, index) => <li>{task} ✔</li>)}
    </ul>
}





ReactDOM.render(<TaskApp />,
    document.getElementById('container'))