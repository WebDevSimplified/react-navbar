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
          height={500}
          alt="innovat10ns Logo" />
      </div>
    </>
  )
}
  