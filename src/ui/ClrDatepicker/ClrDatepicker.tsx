import { range } from "common/utils"
import React, { FunctionComponent } from "react"
import "./ClrDatepicker.scss"

type Props = {
  label: string
  dateFrom?: Date
  dateTo?: Date
}

const ClrDatepicker: FunctionComponent<Props> = ({ label, dateFrom, dateTo }) => {
  dateFrom = dateFrom || new Date(1950, 0, 1)
  dateTo = dateTo || new Date()

  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className="clr-row">
          <div className="clr-col-4">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select">
                {range(1, 31).map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
          <div className="clr-col-4">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select">
                {range(1, 12).map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
          <div className="clr-col-4">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select">
                {range(dateFrom.getFullYear(), dateTo.getFullYear()).map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClrDatepicker
