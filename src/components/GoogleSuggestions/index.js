// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  updateSuggestion = value => {
    this.setState({searchInput: value})
  }
  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-input-suggestions-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSug => (
                <SuggestionItem
                  key={eachSug.id}
                  suggestionDetails={eachSug}
                  updateSuggestion={this.updateSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
