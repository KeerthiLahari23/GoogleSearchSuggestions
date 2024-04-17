// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails,updateSuggestion} = props
  const {id, suggestion} = suggestionDetails
  const onClickSuggestion = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="list-items">
      <p className="suggestion">{suggestion}</p>
      <button type="button" className="arrow-button">
        <img
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          onClick={onClickSuggestion}
        />
      </button>
    </li>
  )
}
export default SuggestionItem
