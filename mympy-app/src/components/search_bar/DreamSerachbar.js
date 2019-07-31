import React from "react";

const SearchBar= (props) => {
return(
    <form>
    <input className="input" type="text" placeholder="Search" onKeyUp={props.search}/>
</form> 
)
}
 export default SearchBar;