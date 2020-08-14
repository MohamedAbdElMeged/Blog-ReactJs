import React, { Component } from 'react'

export class profile extends Component {
    render() {
        return (
            <div>
                <img src={"http://localhost:3000/"+this.props.user.photo.url}
                     alt={this.props.user.first_name} height="200" width="200" className="navbar-brand"/>
            </div>
        )
    }
}

export default profile
