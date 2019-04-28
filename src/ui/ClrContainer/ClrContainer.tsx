import React, { FunctionComponent } from "react"
import "./ClrContainer.scss"

type Props = {
  size: "small" | "normal" | "wide" | "full"
}

const sizeToNumber = (size: Props["size"]) => {
  switch (size) {
    case "small": return 4
    case "normal": return 10
    case "wide": return 12
    default: return 10
  }
}

const ClrContainer: FunctionComponent<Props> = (props) => {
  return (
    <div className="clr-row clr-justify-content-center">
      <div className={`clr-col-${sizeToNumber(props.size)}`}>
        {props.children}
      </div>
    </div>
  )
}

export default ClrContainer
