import React, { Component } from 'react'
import api_client from 'api-client'

api_client.protocol = 'http'
api_client.host = 'localhost'
api_client.port = '5000'

class Search extends Component {

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        api_client.list().then(users => this.setState({users}))
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <h2 className="display-4">Users search</h2>
                </div>
                <form id="search" action="/search" method="get" className="text-center">
                    <input type="text" className="form-control" id="Search" placeholder="Search" />
                    <br />
                    <input type="submit" className="btn btn-dark" defaultValue="Search" />
                </form>
                <ul className="list-group">
                    <li className="list-group-item-primary">
                        <form action="/edit/062c8937-a287-46de-996a-c785cadc9e25" method="get" className="text-center">Name Surname (e-mail) [username]
               <input type="submit" className="btn btn-warning" defaultValue="Edit" />
                            <input type="submit" className="btn btn-danger" defaultValue="Remove" />
                        </form>
                    </li>
                </ul>
                <form id="edit" action="/save/062c8937-a287-46de-996a-c785cadc9e25" method="post" className="text-center">
                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                    <input type="text" className="form-control" id="Surname" placeholder="Surname" />
                    <input type="text" className="form-control" id="E-mail" placeholder="E-mail" />
                    <input type="text" className="form-control" id="newUsername" placeholder="New username" />
                    <input type="text" className="form-control" id="newPassword" placeholder="New password" />
                    <input type="text" className="form-control" id="currentUsername" placeholder="Current username" />
                    <input type="text" className="form-control" id="currentPassword" placeholder="Current password" />
                    <br />
                    <input type="submit" className="btn btn-dark" defaultValue="Save" />
                </form>
                <div className="text-center">
                    <h3 className="display-4">Error on edit</h3>
                </div>
                {/* <ul>
                    {this.state.users.map(user => <li key={user.id}>{`${user.name} ${user.surname}`}</li>)}
                </ul> */}
            </div>
        )
    }
}

export default Search