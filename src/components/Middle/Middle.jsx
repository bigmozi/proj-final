import './middle.styles.css'

const Middle = (props) => {
  return (
    <header className='middle'>
      <div>
      <h3>{props.children}</h3>
      <img src={props.image} alt='' />
     </div>
    </header>
  )
}

export default Middle
