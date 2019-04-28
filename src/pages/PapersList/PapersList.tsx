import { Author, author, PaperCompact } from "common/models"
import React, { FunctionComponent } from "react"
import "./PapersList.scss"

const papers: PaperCompact[] = [{
  authors: [author("John Hughes")],
  lastUpdated: new Date(),
  title: "Why Functional Programming Matters",
}, {
  authors: [author("Philip Wadler"), author("Stephen Blott")],
  lastUpdated: new Date(),
  title: "How to make ad-hoc polymorphism less ad hoc",
}, {
  authors: [author("Philip Wadler")],
  lastUpdated: new Date(),
  title: "Monads for functional programming",
}, {
  authors: [author("Peyton Jones")],
  lastUpdated: new Date(),
  title: "Implementing lazy functional languages on stock hardware: the Spineless Tagless G-machine",
}, {
  authors: [author("Sheng Liang"), author("Paul Hudak"), author("Mark Jones")],
  lastUpdated: new Date(),
  title: "Monad Transformers and Modular Interpreters",
}]

const PapersList: FunctionComponent = () => {
  const renderAuthor = (a: Author, i: number) => (
    <span key={i} className="author-name">{a.firstName.substr(0, 1)}. {a.lastName}</span>
  )

  const renderRow = (paper: PaperCompact, i: number) => (
    <tr key={i}>
      <td><input type="checkbox" className="checkbox" /></td>
      <td className="left">{paper.title}</td>
      <td className="left">{paper.authors.map(renderAuthor)}</td>
      <td>{paper.lastUpdated.toLocaleDateString()}</td>
    </tr>
  )

  return (
    <div className="container">
      <h1>Papers list</h1>
      <table className="table">
      <thead>
        <tr>
          <th> </th>
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
