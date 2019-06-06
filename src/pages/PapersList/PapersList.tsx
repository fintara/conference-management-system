import {Author, author, PaperCompact, PaperInfo, UserInfo} from "common/models"
import React, {FunctionComponent, useEffect, useState} from "react"
import "./PapersList.scss"
import http from "../../common/http";

type Props = {
  user: UserInfo
}

const PapersList: FunctionComponent<Props> = ({user}) => {

  const [papers, setPapers] = useState<PaperInfo[]>([])

  const getUsersPapers = async (email: string) => {
    try {
      const response = await http.get<PaperInfo[]>(`/papers?email=${email}`)
      setPapers(response)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsersPapers(user.email)
  }, [])

  const renderRow = (paper: PaperInfo, i: number) => (
    <tr key={i}>
      <td><input type="checkbox" className="checkbox" /></td>
      <td className="left">{paper.title}</td>
      <td className="left">{paper.authors.join(", ")}</td>
      <td>{paper.createdAt}</td>
    </tr>
  )

  return (
    <div className="container">
      <h1>Papers list</h1>
      <table className="table">
      <thead>
        <tr>
          <th/>
          <th className="left">Title</th>
          <th className="left">Authors</th>
          <th>Last updated</th>
        </tr>
      </thead>
      <tbody>
        {papers.map(renderRow)}
      </tbody>
      </table>
    </div>
  )
}

export default PapersList
