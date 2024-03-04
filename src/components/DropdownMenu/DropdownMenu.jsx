import { useEffect, useState } from "react";
import Button from "../Button/Button";

export default function DropdownMenu() {

  // function ButtonClicked(type)  {

  // }




  return (
    <>
    <div style={{display: 'flex'}}>
    <Button
    // onClick={() => ButtonClicked('1')}
    firstLink='https://react.dev'
    firstWord='React'
    secondLink='https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
    secondWord='JavaScript'
    thirdLink='https://www.typescriptlang.org/'
    thirdWord='TypeScript'
    >Menu</Button> 
    <Button
    // onClick={() => ButtonClicked('2')}
    type = 'button1'
    firstLink='https://react.dev'
    firstWord='React'
    secondLink='https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
    secondWord='JavaScript'
    thirdLink='https://www.typescriptlang.org/'
    thirdWord='TypeScript'
    >Menu</Button>
    <Button
    // onClick={() => ButtonClicked('2')}
    type = 'button1'
    firstLink='https://react.dev'
    firstWord='React'
    secondLink='https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
    secondWord='JavaScript'
    thirdLink='https://www.typescriptlang.org/'
    thirdWord='TypeScript'
    >Menu</Button>
    <Button
    // onClick={() => ButtonClicked('2')}
    type = 'button1'
    firstLink='https://react.dev'
    firstWord='React'
    secondLink='https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
    secondWord='JavaScript'
    thirdLink='https://www.typescriptlang.org/'
    thirdWord='TypeScript'
    >Menu</Button> 
    </div>
    </>
  )
}