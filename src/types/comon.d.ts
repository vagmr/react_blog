interface blogsType {
    title: string;
    body: string;
    author: string;
    id: number;
    _id?: string;
    map?: (blog: blogsType) => JSX.Element
}
interface blogPropType {
    blogs: blogsType[];
    title?: string;
}
declare module 'react-router-dom';