import axios from "axios"

export interface HttpClient {
  get<T>(url: string): Promise<T>
  post<T, R>(url: string, body?: T): Promise<R>
  put<T, R>(url: string, body: T): Promise<R>
  delete<T>(url: string): Promise<T>
}

class HttpClientImpl implements HttpClient {
  private http = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: false,
  })

  public get<T>(url: string): Promise<T> {
    return this.http.get(url).then((res) => res.data)
  }

  public post<T, R>(url: string, body?: T): Promise<R> {
    return this.http.post(url, JSON.stringify(body), {
      headers: {
          "Content-Type": "application/json",
      },
    }).then((res) => res.data)
  }

  public put<T, R>(url: string, body: T): Promise<R> {
    return this.http.put(url, body).then((res) => res.data)
  }

  public delete<T>(url: string): Promise<T> {
    return this.http.delete(url).then((res) => res.data)
  }
}

const http = new HttpClientImpl()

export default http
