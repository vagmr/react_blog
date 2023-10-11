import React from 'react';
interface propType {
    children: React.ReactNode
}

/**
 * 错误边界组件
 *
 * @param {Object} props - The properties passed to the component.
 * @return {void}
 */
class ErrorBoundary extends React.Component<propType> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    declare state: { hasError: boolean };

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-message">发生了错误。</div>;
        }

        return this.props.children;
    }
}
export default ErrorBoundary;

