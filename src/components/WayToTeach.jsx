

export default function WayToTeach({title, description}) {
  return (
    <>
    <li style={{marginBottom: '15px'}}>
      <strong style={{display: 'block', textIndent: '2rem', fontSize:'24px'}}>{title}</strong>
      <div style={{fontSize: '18px'}}>{description}</div>
    </li>
    </>
  )
}