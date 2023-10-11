import { useEffect, useState } from "react";
import axios from "axios";


/**
 * A custom hook that makes an HTTP request to the specified baseurl and returns the response data, error message, loading status, and a function to update the data.
 *
 * @param {string} baseurl - The base URL for the HTTP request.
 * @return {[null | blogsType[], null | string, boolean, (param: () => blogsType[]) => void]}  - An array containing the response data,
 *  error message, loading status, and a function to update the data.
 */
const useRequest = (baseurl: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { CancelToken, isCancel } = axios;
    const cancelSource = CancelToken.source();

    useEffect(() => {
        axios({
            url: baseurl,
            method: "GET",
            timeout: 10000,
            cancelToken: cancelSource.token, // 将取消令牌传递给请求配置
        }).then(res => {
            console.log(res);
            setData(res.data.data)
            setLoading(false)
        }
        ).catch(err => {
            if (isCancel(err)) {
                // 请求被取消，可以不做任何处理
            } else {
                console.log(err);
                setData([{ title: "服务器异常", body: "服务器异常", author: "vagmr", id: 0 }])
                setError("响应异常检查控制台输出")
                setLoading(false)
            }
        }
        )
        return () => cancelSource.cancel("Request canceled");
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [baseurl])
    return [data, error, loading]
}
export default useRequest;