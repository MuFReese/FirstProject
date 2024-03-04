import DropdownMenu from '../DropdownMenu/DropdownMenu'
import classes from './Header.module.css'

// export function DatarmineWidth(){
//   const width = window.innerWidth
//   const element = document.documentElement.style.setProperty('classes.header.width', width)
//   console.log(width)
// }

export default function Header() {
  // DatarmineWidth()
  return (
    <>
    <header className={classes.header} >
      <h1 className={classes.h1}>Label</h1>
      <div className={classes.DropdownMenu}><DropdownMenu/></div>
    </header>
    </>
  )
}