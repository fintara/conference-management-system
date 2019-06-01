import { range } from "common/utils"
import React, { FunctionComponent, useState } from "react"
import "./ClrDatepicker.scss"

type Props = {
  label: string
  dateFrom?: Date
  dateTo?: Date
  onChange?: (date: Date) => void
}

const ClrDatepicker: FunctionComponent<Props> = ({ label, dateFrom, dateTo, onChange }) => {
  dateFrom = dateFrom || new Date(1950, 0, 1)
  dateTo = dateTo || new Date()

  const [day, setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(2000)

  const setInput = (field: "day" | "month" | "year", value: number) => {
    switch (field) {
      case "day": setDay(value); break
      case "month": setMonth(value); break
      case "year": setYear(value); break
    }

    const next = new Date(year, month - 1, day)
    onChange && onChange(next)
  }

  return (
    <div className="clr-form-control clr-row">
      <label className="clr-control-label clr-col-12 clr-col-md-4">{label}</label>
      <div className="clr-control-container clr-col-12 clr-col-md-8">
        <div className="clr-row">
          <div className="clr-col-4">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select" onChange={(e) => setInput("day", parseInt(e.target.value))}>
                {range(1, 31).map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
          <div className="clr-col-4">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select" onChange={(e) => setInput("month", parseInt(e.target.value))}>
                {range(1, 12).map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
          <div className="clr-col-4">
            <div className="clr-select-wrapper">
              <select id="select-basic" className="clr-select" onChange={(e) => setInput("year", parseInt(e.target.value))}>
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
