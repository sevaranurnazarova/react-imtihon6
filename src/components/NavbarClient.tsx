import { Link } from 'react-router-dom'

const NavbarClient = () => {
  return (
    <div style={{display: "flex", marginBottom: "20px"}}>
      <Link className='bg-black text-white p-3 rounded-lg' to={'/all'}>
        Admin Page
      </Link>
    </div>
  )
}

export default NavbarClient
