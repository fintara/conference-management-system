import axios from "axios"
import { setupMaster } from "cluster"

export interface HttpClient {
  get<T>(url: string): Promise<T>
  post<T, R>(url: string, body?: T): Promise<R>
  put<T, R>(url: string, body: T): Promise<R>
  delete<T>(url: string): Promise<T>

  setAuthentication(auth: string | null): void
}

type Headers = {
  "Content-Type": string
  "CMS-Auth"?: string
}

class HttpClientImpl implements HttpClient {
  private http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: false,
  })

  private auth: string | null = null

  public get<T>(url: string): Promise<T> {
    const headers = this.generateHeaders()
    return this.http.get(url, { headers }).then((res) => res.data)
  }

  public post<T, R>(url: string, body?: T): Promise<R> {
    const headers = this.generateHeaders()
    return this.http.post(url, JSON.stringify(body), { headers }).then((res) => res.data)
  }

  public put<T, R>(url: string, body: T): Promise<R> {
    const headers = this.generateHeaders()
    return this.http.put(url, JSON.stringify(body), { headers }).then((res) => res.data)
  }

  public delete<T>(url: string): Promise<T> {
    const headers = this.generateHeaders()
    return this.http.delete(url, { headers }).then((res) => res.data)
  }

  public setAuthentication(auth: string | null): void {
    this.auth = auth
  }

  private generateHeaders(): Headers {
    const headers: Headers = {
      "Content-Type": "application/json",
    }

    if (this.auth) {
      headers["CMS-Auth"] = this.auth
    }

    return headers
  }
}

const http = new HttpClientImpl()

export default http
