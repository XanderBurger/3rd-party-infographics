import { useScroll, animated } from "react-spring"
import cookieSvg from "./assets/svgs/cookie.svg"


export default function MyComponent() {
  const { scrollYProgress } = useScroll()

  return (
    <animated.div style={{ opacity: 1 - scrollYProgress}}>
      <img className="cookieSvg" alt="cookie svg" src={cookieSvg}/>
    </animated.div>
  )
}

