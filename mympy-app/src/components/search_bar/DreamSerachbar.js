import React from "react";
import { connect } from 'react-redux';
import { updateSearch } from '../../actions'
import "./Dreams.css"


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
         
         <div class="searchContainer">
            <i class="fa fa-search searchIcon"></i>
            <input class="searchBox" type="text" value={this.state.search} placeholder="search" onChange={this.changeSearch}/>
            </div>
        </form> 
        )
    }
}


 export default connect(null, {updateSearch})(SearchBar)