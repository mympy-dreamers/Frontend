import React from "react";
import { connect } from 'react-redux';
import { updateSearch } from '../../actions'
import "./Dreams.css"

//Search component that allows users to search through dreams in marketplace
class SearchBar extends React.Component{
    state = {
        search: ''
    }

    changeSearch = (e) => {
        let value = e.target.value
        this.setState(state => {
            return {search: value}
        }, () => {
            this.props.updateSearch(this.state.search.toLowerCase())
        })
    }

    render(){
        return(
        <form  className="search-bar">
            <div>
              <input className="searchBox" type="text" value={this.state.search} placeholder="search" onChange={this.changeSearch}/>
              <i id="searchicon" className="fa fa-search"></i> 
            </div>
        </form>
        )
    }
}


 export default connect(null, {updateSearch})(SearchBar)