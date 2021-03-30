import { useEffect } from 'react';

export default () => {
    useEffect(() => {
        window && window.location.reload();
    }, []);
    return <h1>Page will keep refreshing if host application is not SSR</h1>;
}