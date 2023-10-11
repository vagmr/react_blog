import { useState } from "react";
import "../style/create.css"
import axios from "axios";
import { BASE_URL } from "../constant";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('vagmr');
    const [id, setId] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const blog = { title, body, author, id };
        axios.post(BASE_URL, blog)
            .then(() => {
                history.push('/');
            }).catch(err => console.log(err));
    }
    return (<div className="create">
        <h2>Create new blogs</h2>
        <form onSubmit={handleSubmit}>
            <label>标题:</label>
            <input
                type="text"
                required
                value={title || ''}
                onChange={e => setTitle(e.target.value)}
            />
            <label>内容:</label>
            <textarea required
                value={body || ''}
                onChange={e => setBody(e.target.value)}
            >
            </textarea>
            <label>作者:</label>
            <select
                value={author}
                onChange={e => setAuthor(e.target.value)}
            >
                <option value="vagmr">vagmr</option>
                <option value="other">宝批龙</option>
            </select>
            <label>id:</label>
            <input type="number"
                required
                value={id}
                onChange={e => setId(+e.target.value)}
            />
            {!isLoading && <button>提交</button>}
            {isLoading && <button disabled>提交中....</button>}
        </form>
    </div>);
};

export default Create;