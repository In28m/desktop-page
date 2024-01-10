import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section className='page'>
      <h2>LandingPage</h2>
        <div className="links-container">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contacts</a>
          <a href="">Faq</a>
        </div>
      <button>Get Started</button>
    </section>

    <section className='container'>
      <h1>React Landing Page</h1>
      <h1>Website Template</h1>
      <p>Made with react and styled components</p>
      <button>Get Started</button>
    </section>
    
    <section className='container-card'>
      <div className="card-1">
        <h1>Option 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque voluptatibus exercitationem, consectetur, quidem corporis quis magni nesciunt soluta reprehenderit natus laborum necessitatibus numquam id nisi quos quam. Quibusdam, quisquam?</p>
      </div>
      <div className="card-2">
        <h1>Option 2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque voluptatibus exercitationem, consectetur, quidem corporis quis magni nesciunt soluta reprehenderit natus laborum necessitatibus numquam id nisi quos quam. Quibusdam, quisquam?</p>
      </div>
      <div className="card-3">
        <h1>Option 3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque voluptatibus exercitationem, consectetur, quidem corporis quis magni nesciunt soluta reprehenderit natus laborum necessitatibus numquam id nisi quos quam. Quibusdam, quisquam?</p>
      </div>
      <div className="card-4">
        <h1>Option 4</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque voluptatibus exercitationem, consectetur, quidem corporis quis magni nesciunt soluta reprehenderit natus laborum necessitatibus numquam id nisi quos quam. Quibusdam, quisquam?</p>
      </div>
    </section>


    </>
  )
}

export default App
