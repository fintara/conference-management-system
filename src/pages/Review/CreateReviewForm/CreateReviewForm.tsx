import React, { FunctionComponent } from "react"
import { PaperInfo } from "../../../common/models"
import ClrSelect from "../../../ui/ClrSelect/ClrSelect"
import ClrTextArea from "../../../ui/ClrTextArea/ClrTextArea"
import PaperInfoCard from "../../ReviewersSelection/PaperInfo/PaperInfoCard"
import "./CreateReviewForm.scss"

const marks = ["Very Good", "Good", "Average", "Pass", "Fail"]

const info: PaperInfo = {
  id: "",
  abstract: "",
  createdAt: "12.12.2012 12:12:12",
  authors: ["John Smith", "Jane Doe"],
  keywords: ["data", "science", "AI", "machine learning"],
  title: "Machine learning in automated text categorization",
}

const CreateReviewForm: FunctionComponent = () => {
  return (
    <div className="container">
      <h2>Create Review</h2>
      <div className="clr-row">
        <div className="clr-col-6 paper-info">
          <PaperInfoCard info={info}/>
        </div>
      </div>
      <div className="clr-row">
        <div className="clr-col-12">
          <div className="card">
            <div className="card-header">
              Review
            </div>
            <div className="card-block">
              <form className="clr-form-horizontal">
                <ClrSelect label="Grade" options={marks}/>
                <ClrTextArea label="Content" placeholder="Content..."/>
              </form>
            </div>
            <div className="card-footer">
              <button className="btn btn-sm btn-outline">Save</button>
              <button className="btn btn-sm btn-success-outline">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateReviewForm
