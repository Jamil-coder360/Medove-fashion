import Header from './Header'
import { Outlet } from 'react-router'

const Mainlayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}

export default Mainlayout