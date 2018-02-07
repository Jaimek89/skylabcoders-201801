'use strict'

class App extends React.Component{
    constructor(){
        super()

        this.state = {
            input: '',
            taskList: []

        }
    }

    keepInput = (e) => {
        //console.log(e.target.value)
        this.setState({input: e.target.value})
    }

    addItem = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return{
                taskList: prevState.taskList.concat({title:this.state.input, done:false}),
                input:''
            }
        })
    }

    render(){
        return (
            <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="todolist not-done">
                  <h1>Todos</h1>
                  <form onSubmit={this.addItem}>
                    <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={this.keepInput} value={this.state.input}/>
                  </form>
                  <button id="checkAll" className="btn btn-success">Mark all as done</button>
                  <hr />
                  <ul id="sortable" className="list-unstyled">
                    {this.state.taskList.map((e) =>
                        <li className="ui-state-default">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" defaultValue />{e.title}</label>
                        </div>
                      </li>
                    )}
                  </ul>
                  <div className="todo-footer">
                    <strong><span className="count-todos" /></strong> Items Left
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="todolist">
                  <h1>Already Done</h1>
                  <ul id="done-items" className="list-unstyled">
                    <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove" /></button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

/*<ul id="sortable" className="list-unstyled">
<li className="ui-state-default">
  <div className="checkbox">
    <label>
      <input type="checkbox" defaultValue />Take out the trash</label>
  </div>
</li>
<li className="ui-state-default">
  <div className="checkbox">
    <label>
      <input type="checkbox" defaultValue />Buy bread</label>
  </div>
</li>
<li className="ui-state-default">
  <div className="checkbox">
    <label>
      <input type="checkbox" defaultValue />Teach penguins to fly</label>
  </div>
</li>
</ul>*/