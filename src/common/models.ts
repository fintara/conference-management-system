// now it's 1 file, later can be module with many files

export interface Reviewer {
  firstName: string
  lastName: string
  university: string
  degree: Degree
  keyWords: string[]
}

export enum Degree {
  BACHELOR = "Bachelor",
  MASTER = "Master",
  DOCTOR = "Doctor",
}

export interface Author {
  firstName: string
  lastName: string
}

export function author(name: string): Author {
  const [firstName, lastName] = name.split(" ")
  return { firstName, lastName }
}

export interface PaperCompact {
  title: string
  authors: Author[]
  lastUpdated: Date
}
