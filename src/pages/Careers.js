// import logo from '../../src/assets/images/logo.png'
import { UserContext } from "../App"
import { useContext } from "react"


export default function Careers(props) {
  const Toplogo = useContext(UserContext);
  return (
    <>
      <h1>Careers</h1>
      <div className="logo-home-page">
        <img src={Toplogo}
          width={200}
          alt="innovat10ns Logo" />
      </div>
      <div className="careers-desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  )
}
