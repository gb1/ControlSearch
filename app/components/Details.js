import React from 'react';

class Details extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <h1>this.props.control.readme</h1>

                    </div>
                </nav>
                <div className="container">


                </div>
            </div>
        )
    }
}

export default Details;