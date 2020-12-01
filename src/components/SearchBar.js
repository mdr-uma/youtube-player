import React from 'react'

class SearchBar extends React.Component {
    state = { 
        input: "" 
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input 
                            type="text" 
                            value={this.state.input} 
                            onChange={this.handleOnChange}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar