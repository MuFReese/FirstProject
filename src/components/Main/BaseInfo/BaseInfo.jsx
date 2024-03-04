import WayToTeach from "../../WayToTeach"
import { NowLive } from "../../../data"
import classes from './BaseInfo.module.css'

export default function BaseInfo() {

  return(
    <>
    <div style={{margin: '25px 50px'}}>
      <h2 className={classes.h2}>Программирование</h2>
      <h3 className={classes.h3}>Чем я занимаюсь 24 на 7 {':)'}</h3>
      <ul className={classes.ul}>
        {NowLive.map( way => <WayToTeach key={way.title} {... way} />)}
      </ul>
    </div>
    </>
  )
}