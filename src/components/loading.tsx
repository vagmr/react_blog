import { Spin } from 'antd';

const Loading = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Spin size="large" ></Spin>
        <h1>Loading....</h1>
    </div>
);

export default Loading;