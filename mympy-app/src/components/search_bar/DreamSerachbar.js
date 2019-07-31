import React from "react";
import { connect } from 'react-redux';
import { updateSearch } from '../../actions'


class SearchBar extends React.Component{
    state = {
        search: ''
    }

     changeSearch = (e) => {
        let value = e.target.value
        this.setState(state => {
            return {search: value}
        }, () => {
            this.props.updateSearch(this.state.search)
        })
        
    }
    render(){
        return(
            <form>
            <input className="input" type="text" value={this.state.search} placeholder="Search" onChange={this.changeSearch}/>
        </form> 
        )
    }
}


 export default connect(null, {updateSearch})(SearchBar)