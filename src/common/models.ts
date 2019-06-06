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

export interface PaperInfo {
  id: string
  abstract: string
  title: string
  createdAt: string
  authors: string[]
  keywords: string[]
}

export interface UserInfo {
  id: string
  email: string
  firstName: string
  lastName: string
  name: string
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
