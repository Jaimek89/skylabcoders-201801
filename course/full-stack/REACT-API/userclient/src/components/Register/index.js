import React from 'react'

function Register(){

    return(
        <div>
            <div>
                <header className="text-center">
                    <h1 className="display-3">USER-APP</h1>
                </header>
                <form id="register" action="/register" method="post" className="text-center">
                    <legend className="display-4">New user</legend>
                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                    <input type="text" className="form-control" id="Surname" placeholder="Surname" />
                    <input type="text" className="form-control" id="E-mail" placeholder="E-mail" />
                    <input type="text" className="form-control" id="Username" placeholder="Username" />
                    <input type="text" className="form-control" id="Password" placeholder="Password" />
                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                    <br />
                    <input type="submit" className="btn btn-dark" defaultValue="Register" />
                </form>
                <div className="text-center">
                    <h3 className="display-4">Error on register</h3>
                </div>
            </div>
        </div>
    )
}

export default Register