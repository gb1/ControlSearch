import React from 'react';

class Search extends React.Component {

    getRef(ref){
        this.searchTermRef = ref;
    }
    handleSubmit(){
        const username = this.searchTermRef.value;
        this.searchTermRef.value = '';
    }

    render(){
        return (
            <div className="col-sm-12">
                <form onSubmit={() => this.handleSubmit()}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search</button>
                    </div>
                </form>
            </div>
            )
    }
}

export default Search;