import axios, { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {}

function getApiUrl(method: string) {
    const HOST = "127.0.0.1:3001"

    return `//${HOST}/${method}`.toLocaleLowerCase()
}

function onError(res) {
    // api request on error
    console.error(res)

    return res
}

export default function WebApi<T>(method: string, payload: any): Promise<T> {
    return axios.post<T>(getApiUrl(method), payload, config).then((res) => {
        return res.data
    }, onError)
}
