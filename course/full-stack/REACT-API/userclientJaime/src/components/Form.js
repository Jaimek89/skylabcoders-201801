import React, { Component } from 'react'

export class Form extends Component {

  render() { 
    
    return(
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Surname</label>
            <input type="email" class="form-control" id="surname" placeholder="Enter surname"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">E-mail</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="email" class="form-control" id="username" placeholder="Enter username"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
  }
}