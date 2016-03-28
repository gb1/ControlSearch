import React from 'react';
import Search from './Search';
import Results from './Results';
import getData from '../api/npm-search';

class Main extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            controls: []
        }
    }

    componentDidMount(){

        getData()
            .then(function(res){
                this.setState({ controls: res.data})
            }.bind(this));
    }
    
    render() {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <h1>UI5 Custom Control Search</h1>
                    </div>
                </nav>
                <div className="container">
                    <Search/>
                </div>
                <div className="container">
                    <Results controls={this.state.controls} history={this.props.history}/>
                </div>
            </div>
        )
    }
}



export default Main