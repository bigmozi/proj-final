import './middle.styles.css'




const Middle = (props) => {
  return (
    <header id ='middle' className='middle'>
      <div className='banner'>
      
      <p>{props.children}</p>
      <background src={props.background} alt ='' />
      
      
     </div>
    </header>
  )
}

export default Middle
