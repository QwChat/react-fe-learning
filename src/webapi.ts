import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"

const config: AxiosRequestConfig = {}

function getApiUrl(method: string) {
    const HOST = "127.0.0.1:3001"

    return `//${HOST}/${method}`.toLocaleLowerCase()
}

// all api is error return structure
interface IApiErrorResponseData {
    code: number
    message: string
}

interface IApiError extends AxiosError {
    response?: AxiosResponse<IApiErrorResponseData>
}

function onError(res: IApiError): IApiErrorResponseData {
    const defaultErrorResponse: IApiErrorResponseData = {
        code: 100,
        message: "Request server error"
    }
    if (res.response && typeof res.response.data === "string") {
        res.response.data = {
            code: 100,
            message: res.response.data
        }
    }

    console.error(res)

    return res.response ? res.response.data : defaultErrorResponse
}

export function IsErrorResponse(res: any): res is IApiErrorResponseData {
    if ("code" in res && "message" in res) {
        return true
    }

    return false
}

export default function WebApi<T>(method: string, payload: any): Promise<IApiErrorResponseData | T> {
    return axios
        .post<T>(getApiUrl(method), payload, config)
        .then((res) => {
            return res.data
        }, onError)
        .catch(onError)
}
