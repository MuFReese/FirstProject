import './Button.css'

export default function Button({type, onClick, firstLink, secondLink, thirdLink, firstWord, secondWord, thirdWord, children, isActive, ...props}) {
  
  return (
    <>
    {/* <div className='Dropdown'> */}
      <button 
      id='btn'
      {...props}
      onClick={onClick}
      className='button'>
        {children}
      </button>
      {/* <ul id="myDropdown" className="dropdown-content">
        <li><a href={firstLink}>{firstWord}</a></li>
        <li><a href={secondLink}>{secondWord}</a></li>
        <li><a href={thirdLink}>{thirdWord}</a></li>
      </ul> */}
    {/* </div> */}
    </>
  )
}