import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
function SideBars() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action active bg-dark">Về trang chủ</Link>
                <Link to="/products/men" className="list-group-item list-group-item-action">Sản phẩm nam</Link>
                <Link to="/products/women" className="list-group-item list-group-item-action">Sản phẩm nữ</Link>
            </div>
            <Outlet />
        </>
    );
}
export default SideBars;

