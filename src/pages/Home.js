// import logo from '../../src/assets/images/logo.png'
import { UserContext } from "../App"
import { useContext } from "react"

export default function Home() {
  const TextLogo = useContext(UserContext)
  const SideLogo = useContext(UserContext)
  const Graphic = useContext(UserContext)
  return (
    <>
      <h1>Home of the innovat0rs</h1>
      <div className="logo-home-page">
        <img src={TextLogo}
          width={700}
          height={500}
          alt="innovat10ns Logo" />
      </div>
      <div>
        <img src={SideLogo} />
      </div>
      <div>
        <img src={Graphic} />
      </div>
    </>
  )
}

