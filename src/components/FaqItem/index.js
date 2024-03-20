// Write your code here.
import './index.css'

const FaqItem = props => {
  const {each, onClickFaq} = props
  const {id, questionText, answerText, canIShowAnswer} = each

  const onClickButton = () => {
    onClickFaq(id)
  }
  let buttonImage
  let imageAltText

  if (canIShowAnswer) {
    buttonImage =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    imageAltText = 'minus'
  } else {
    buttonImage =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    imageAltText = 'plus'
  }

  return (
    <li className="eachFaqListItem">
      <div className="titleButtonContainer">
        <h1 className="title">{questionText}</h1>
        <button type="button" onClick={onClickButton} className="button">
          <img src={buttonImage} alt={imageAltText} className="buttonImage" />
        </button>
      </div>
      {canIShowAnswer ? (
        <>
          <hr />
          <p className="answerText">{answerText}</p>
        </>
      ) : null}
    </li>
  )
}

export default FaqItem
