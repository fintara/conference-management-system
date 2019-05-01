import React, {ChangeEvent, FunctionComponent, useState} from "react"
import "./ClrInput.scss"

type Props = {
  label: string
  type?: "text" | "email" | "password"
  placeholder?: string
  fluid?: boolean
  onChange?: (text: string) => void
  onPress?: (text: string) => void
}

const ClrInput: FunctionComponent<Props> = ({ label, type, placeholder, fluid, onChange, onPress }) => {
  fluid = fluid !== undefined ? fluid : true

  const [input, setInput] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void  => {
    setInput(event.target.value)
    onChange && onChange(input)
  }

  const handlePress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.keyCode === 13) {
      onPress && onPress(input)
    }
  }

  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className={`clr-input-wrapper ${fluid ? "clr-input-fluid" : ""}`}>
          <input
            type={type || "text"}
            placeholder={placeholder}
            className="clr-input"
            onKeyDown={handlePress}
            onChange={handleChange}
          />
        </div>
      </div>
    </div >
  )
}

export default ClrInput
