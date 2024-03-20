// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.newList = faqsList.map(each => ({
      ...each,
      canIShowAnswer: false,
    }))
    console.log(this.newList)
    this.state = {newList: this.newList}
  }

  onClickFaq = id => {
    this.setState(previousState => ({
      newList: previousState.newList.map(each => {
        if (each.id === id) {
          return {...each, canIShowAnswer: !each.canIShowAnswer}
        }
        return each
      }),
    }))
  }

  render() {
    const {newList} = this.state

    return (
      <div className="mainContainer">
        <h1 className="mainHeading">FAQs</h1>
        <ul className="eachFaqContainer">
          {newList.map(each => (
            <FaqItem each={each} key={each.id} onClickFaq={this.onClickFaq} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
