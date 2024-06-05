import { Link, Outlet } from 'react-router-dom'
import './App.css'
const Layout = () => {
    return (
        <>
            <div className="main">
                <Link to="/all">All</Link>
                <Link to="/fullstack">FULLSTACK</Link>
                <Link to="/datascience">DATASCIENCE</Link>
                <Link to="/cyber">CYBERSECURITY</Link>
                <Link to="/carr">CARRER</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Layout
