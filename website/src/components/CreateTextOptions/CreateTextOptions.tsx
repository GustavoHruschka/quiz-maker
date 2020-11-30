import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './createTextOptions.css'

interface questionItem {
  questionText: string
  optionsText: Array<string>
  selectedRightOptionNumber: number
}

interface CreateTextOptionsProps {
  questionData: questionItem
  questionNumber: number

  handleAddOption: Function
  handleDeleteOption: Function
  handleSelectRightOption: Function
  handleOptionTextChange: Function
}

function CreateTextOptions(props: Readonly<CreateTextOptionsProps>) {
  return (
    <div className="text-answer">
      {props.questionData.optionsText.map((optionText, optionNumber) => {
        return (
          <div className="option-box" key={'box' + optionNumber}>
            <input
              className="options"
              key={'text' + optionNumber}
              type="text"
              placeholder={`Option ` + (optionNumber + 1)}
              value={optionText}
              onChange={(event) => props.handleOptionTextChange(event, props.questionNumber, optionNumber)}
            />

            <label
              htmlFor={'radio' + optionNumber + 'question' + props.questionNumber}
              className="right-option-selector-container"
            >
              <input
                className="right-option-selector"
                key={'radio' + optionNumber}
                id={'radio' + optionNumber + 'question' + props.questionNumber}
                type="radio"
                name={"select-right-option" + props.questionNumber}
                onChange={() => props.handleSelectRightOption(props.questionNumber, optionNumber)}
                checked={props.questionData.selectedRightOptionNumber === optionNumber}
              />
              <span className="checkmark"></span>
            </label>

            <div
              className="delete-option-button"
              onClick={() => props.handleDeleteOption(props.questionNumber, optionNumber)}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="delete-option-icon"
              />
            </div>
          </div>
        )
      })}

      <input
        type="button"
        className="add-option-button"
        onClick={() => props.handleAddOption(props.questionNumber)}
        value="Add option"
      />
    </div>
  )
}

export default CreateTextOptions