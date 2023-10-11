import { useState } from "react";
/**
* Handles the click event.
*用于在点击按钮时改变页面渲染的name
* @param {string | undefined} name - 可选参数name,如果不传入则默认为vagmr
* @param {React.MouseEvent} e - 事件参数e,可选，注意为第二个参数
* @returns {void}
*/
const useNewClick = (): [string, (name?: string | undefined, e?: React.MouseEvent) => void] => {
    const [name, setName] = useState<string>('name');
    const handleClick = (name?: string | undefined, e?: React.MouseEvent): void => {
        setName(name ?? 'vagmr');
        console.log(e);
    }
    return [name, handleClick]
}
export default useNewClick