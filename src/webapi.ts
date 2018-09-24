import axios from "axios"

function getAPIurl(method: string) {
    const HOST = "127.0.0.1:3001"
    return `//${HOST}/${method}`.toLocaleLowerCase()
}

function onError(res) {
    // api request on error
    console.error(res)
}

export default function Webapi<T>(method: string, payload: any) {
    return axios.post<T>(getAPIurl(method), payload, {}).then((res) => {
        return res.data
    }, onError)
}
