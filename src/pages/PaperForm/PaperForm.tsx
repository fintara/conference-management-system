import React, { FunctionComponent, useState } from "react"
import ClrFileInput from "ui/ClrFileInput"
import ClrInput from "ui/ClrInput"
import ClrTextArea from "ui/ClrTextArea"
import "./PaperForm.scss"

const PaperForm: FunctionComponent = () => {

  const [keyWords, setKeywords]: [string[], any] = useState(["AI", "Machine Learning", "data", "neural networks"])

  const addKeyword = (word: string) => {
    if (!keyWords.includes(word)) {
      setKeywords([...keyWords, word])
    }
  }

  const removeKeyword = (word: string): void => {
    setKeywords(keyWords.filter((keyWord) => keyWord !== word))
  }

  const renderKeyword = (word: string, index: number) =>
    <span className="label" key={index}>{word}<i className="clr-icon times pointer" onClick={() => removeKeyword(word)}/></span>


  return (
    <div className="card">
      <div className="card-header">
        Create a paper
      </div>
      <div className="card-block">
        <form className="clr-form clr-form-compact">
          <ClrInput label="Title"/>
          <ClrInput label="Other authors" placeholder="email or name"/>
          <ClrTextArea label="Abstract"/>
          <ClrFileInput label="File"/>
          <ClrInput label="Add keywords" placeholder="Type a keyword" onPress={addKeyword}/>
          <div className="clr-form-control clr-row clr-justify-content-end">
            {keyWords.map((keyWord, index) => renderKeyword(keyWord, index))}
          </div>
        </form>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-success-outline">Create</button>
      </div>
    </div>
  )
}

export default PaperForm
