import React from 'react';

class Results extends React.Component {

    moreInfo(event){
        debugger;
        this.context.router.push('/details');
    }

    render() {

        const {controls} = this.props;

        return (
            <div className="container">
                <ul>
                    { controls.map((control, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <h3>{control.data.name}</h3>
                                <h5>{control.data.author.name}</h5>
                                <h5>{control.data.author.email}</h5>
                                <p>{control.data.description}</p>
                                <button onClick={this.moreInfo.bind(this, control.data)}>More info...</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


Results.contextTypes =  {
    router: React.PropTypes.object.isRequired
}

export default Results;