import { UserContext } from "../App"
import { useContext } from "react"

export default function How(props) {
  const Toplogo = useContext(UserContext);
  const Graphic = useContext(UserContext);
  return (
    <>
      <h1>How</h1>
      <div className="logo-home-page">
        <img src={Graphic}
          width={200}
          alt="innovat10ns Logo" />
      </div>
    </>
  )
}
