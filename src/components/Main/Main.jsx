import './main.styles.css'




const Main = (props) => {
  return (
    <header id ='main' className='main'>
      <div className='banner'>
      
      <section>{props.children}</section>
      
      
      
     </div>
    </header>
  )
}

export default Main
