/* eslint-disable react/button-has-type */
import './index.css'

const TabItem = props => {
  const {tabsList, onClickDetails, isActive} = props
  const {displayText, tabId} = tabsList

  const btnApply = isActive ? 'btn-icon' : ''

  const onClickBtn = () => {
    onClickDetails(tabId)
  }

  return (
    <li>
      <button className={`btn ${btnApply}`} onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
