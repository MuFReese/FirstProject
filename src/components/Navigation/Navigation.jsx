import Button from "../Button/Button";
import classes from './Navigation.module.css'


export default function Navigation({active, onChange}) {
  
  return (
    <>
    <nav className={classes.nav}>
      <Button isActive={active === 'BaseInfo'} onClick={() => onChange('BaseInfo')}>Base Information</Button>
      <Button isActive={active === 'Calculate'} onClick={() => onChange('Calculate')}>Calculate</Button>
      <Button isActive={active === 'Tasks'} onClick={() => onChange('Tasks')}>Tasks</Button>
      <Button isActive={active === 'User Search'} onClick={() => onChange('User Search')}>User Search</Button>
    </nav>
    </>
  )
}