import React, {PureComponent} from 'react';

import './css/SearchBar.css';

class SearchBar extends PureComponent {
    state = {term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchFormSubmit(this.state.term);
    };

    onInputChange = (event) => this.setState({term: event.target.value});

    render() {
        const {placeholder} = this.props;
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    placeholder={placeholder}
                    aria-label={placeholder}
                    aria-describedby="btn-search"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <button
                    type="submit"
                    id="btn-search"
                    className="btn-search"
                >
                    <i className="nav-icon-search" />
                </button>
            </form>
        )
    }
}

SearchBar.defaultProps = {
    placeholder: "Nunca dejes de buscar"
};

export default SearchBar;