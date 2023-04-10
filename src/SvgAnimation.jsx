import { useScroll, animated } from "react-spring"
import cookieSvg from "./assets/svgs/cookie.svg"


export default function MyComponent() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="svgDiv">
      <img className="cookieSvg" alt="cookie svg" src={cookieSvg}/>
    </div>
  
  )
}

