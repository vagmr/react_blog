import { type ReactNode } from 'react'
import '../style/content.scss'
import BlogList from '../components/blogList';
import Loading from '../components/loading';
import useRequest from '../hooks/useRequest';
import { BASE_URL } from '../constant';
/**
 * 渲染内容区域
 *
 * @return {ReactNode} 返回渲染内容区域的jsx.
 */

const Content = (): ReactNode => {
    const [blogs, error, loading] = useRequest(BASE_URL);


    return (
        <>
            <main className='content'>
                {error && <h3 className='error'>{error}</h3>}
                {loading ? (<Loading />) : (blogs && <BlogList blogs={blogs} title="All blogs" />)}
            </main>
        </>
    )
}
export default Content