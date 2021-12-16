import './middle.styles.css'




const Middle = (props) => {
  return (
    <header id ='middle' className='middle'>
      <div className='banner'>
      
      <section>{props.children}</section>
      
      
      
     </div>
    </header>
  )
}

export default Middle
