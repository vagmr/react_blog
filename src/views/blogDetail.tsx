import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import { BASE_URL } from "../constant";
import Loading from "../components/loading";
import '../style/detail.scss'
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Modal, message } from "antd";


const BlogDetail = () => {
    const [isDelete, setIsDelete] = useState(false);
    const history = useHistory();

    const showDeleteConfirm = (uid: string) => {
        Modal.confirm({
            title: '确认要删除博客吗？',
            onOk: async () => {
                setIsDelete(true);
                try {
                    const res = await axios.delete(`${BASE_URL}/${uid}`);
                    setIsDelete(false);
                    console.log(res);
                    message.success('博客删除成功', 2, () => {
                        history.replace('/');
                    });
                } catch (err) {
                    console.log(err);
                    setIsDelete(false);
                }
            },
            onCancel: () => {
                // 用户取消操作
                message.success('取消成功', 2);
            },
        });
    }

    const { id } = useParams()
    const [detail, error, loading] = useRequest(BASE_URL + "/" + id);
    return (
        isDelete ? <Loading /> :
            <div className="detail">
                {error && <h3 className='error'>{error}</h3>}
                {loading ? <Loading /> : (detail && (
                    <article>
                        <h2 className="detail-title">{detail.title}</h2>
                        <p className="detail-author">Author: {detail.author}</p>
                        <p className="detail-body">{detail.body}</p>
                        <button onClick={() => showDeleteConfirm(detail._id)}>删除博客</button>
                    </article>
                ))}
            </div>
    );
};

export default BlogDetail;