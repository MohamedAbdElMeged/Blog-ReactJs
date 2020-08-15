import React, { Component } from 'react'

export class flash extends Component {
    render() {
        const {type , body} = this.props.flashMessage
        return (
            <div id="alertBody">
                <div className={"alert alert-dismissible alert-"+type} role="alert">
                    <button type="button" className="close" onClick={this.props.hideFlashMessage} data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {body}
                </div>
            </div>
        )
    }
}

export default flash;



