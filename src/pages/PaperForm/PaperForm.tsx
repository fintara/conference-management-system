import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent, useState } from "react"
import ClrFileInput from "ui/ClrFileInput"
import ClrInput from "ui/ClrInput"
import ClrTextArea from "ui/ClrTextArea"
import "./PaperForm.scss"
import http from "../../common/http"
import {UserInfo} from "../../common/models"
import {Redirect} from "react-router";

type Props = {
  user: UserInfo
}

const PaperForm: FunctionComponent<Props> = ({user}) => {

  const [state, setState] = useState<"idle" | "success" | "error">("idle")
  const [form, setForm] = useState({
    title: "",
    abstract: "",
    authors: [] as string[],
    keywords: [] as string[],
  })

  const setInput = (field: string, value: any) => {
    console.log(form)
    setForm({...form, [field]: value})
  }

  const sendRequest = async () => {
    setInput("authors", [...form.authors, user.email])
    setState("idle")
    try {
      const response = await http.post("/papers", form)
      if(response) {
        setState("success")
      }
    } catch (e) {
      console.error(e)
      setState("error")
    }
  }

  if (state === "success") {
    return <Redirect to="/papers" />
  }

  const addKeyword = (word: string) => {
    const trimmed = word.trim()

    if (trimmed.length === 0) {
      return
    }

    if (!form.keywords.includes(trimmed)) {
      setInput("keywords", [...form.keywords, trimmed])
    }
  }

  const removeKeyword = (word: string): void => {
    setInput("keywords", form.keywords.filter((keyWord) => keyWord !== word))
  }

  // Copy-paste programming at its best
  const addAuthor = (author: string) => {
    const trimmed = author.trim()

    if (trimmed.length === 0) {
      return
    }

    if (!form.authors.includes(trimmed)) {
      setInput("authors", [...form.authors, trimmed])
    }
  }

  const removeAuthor = (author: string): void => {
    setInput("authors", form.authors.filter((a) => a !== author))
  }

  const renderKeyword = (word: string, index: number) => (
    <span className="label" key={index}>
      {word}
      <a className="close" onClick={() => removeKeyword(word)}><FontAwesomeIcon icon="times" /></a>
    </span>
  )

  return (
    <div className="card">
      <div className="card-header">
        Create a paper
      </div>
      <div className="card-block">
        <form className="clr-form clr-form-compact">
          <ClrInput label="Title" onChange={(value) => setInput("title", value)}/>
          <ClrInput label="Add authors" placeholder="Type an email" onPress={addAuthor}/>
          <div className="clr-form-control clr-row clr-justify-content-end">
            {form.authors.map(renderKeyword)}
          </div>
          <ClrTextArea label="Abstract" onChange={(value) => setInput("abstract", value)}/>
          <ClrFileInput label="File"/>
          <ClrInput label="Add keywords" placeholder="Type a keyword" onPress={addKeyword}/>
          <div className="clr-form-control clr-row clr-justify-content-end">
            {form.keywords.map(renderKeyword)}
          </div>
        </form>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-success-outline" onClick={sendRequest}>Create</button>
      </div>
    </div>
  )
}

export default PaperForm
