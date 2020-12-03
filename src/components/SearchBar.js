import React from 'react'

class SearchBar extends React.Component {
    state = { 
        input: "" 
    }

    handleOnChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleOnFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.input)
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.handleOnFormSubmit} className="ui form">
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