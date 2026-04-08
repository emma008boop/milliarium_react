import { Outlet } from 'react-router-dom';
import Nav from '../component/layout/landing/nav/Nav';

const PublicLayout = () => {
    return (
        <>
            <Nav />

            <Outlet />

            
        </>
    )
}

export default PublicLayout;