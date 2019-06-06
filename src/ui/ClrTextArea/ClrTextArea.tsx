import React, {ChangeEvent, FunctionComponent, useState} from "react"
import "./ClrTextArea.scss"

type Props = {
  label: string
  placeholder?: string
  fluid?: boolean
  onChange?: (text: string) => void
}

const ClrTextArea: FunctionComponent<Props> = ({ label, placeholder, fluid, onChange }) => {
  fluid = fluid !== undefined ? fluid : true

  const [input, setInput] = useState("")

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void  => {
    setInput(event.target.value)
    onChange && onChange(event.target.value)
  }

  return (
    <div className="clr-form-control clr-row">
    <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className={`clr-textarea-wrapper ${fluid ? "clr-textarea-fluid" : ""}`}>
          <textarea
            placeholder={placeholder}
            className="clr-textarea"
            onChange={handleChange}
          />
        </div>
      </div>
    </div >
  )
}

export default ClrTextArea
