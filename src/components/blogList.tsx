import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
/**
 * Renders a list of blog posts.
 *
 * @param {blogPropType} blogs - 参数为blog对象的数组
 * @return {ReactNode} 返回一个可以到处渲染的blog列表
 */

const BlogList = ({ blogs, title }: blogPropType): ReactNode => {


    return <>
        <h2>{title}</h2>
        {blogs.map(blog => (
            <div className='preview' key={blog.id}>
                <Link to={`/blog/${blog._id}`}>
                    <h2>{blog.title}</h2>
                    <p>--由{blog.author}发表</p>
                </Link>
            </div>
        ))}
    </>
};

export default BlogList;