import './App.css'

function App() {

  return (
    <> 
      <h1 className='heading'>Let&apos;s Learn React</h1>
      <p>By learning React, you will be able to build a full-stack web application.</p>
      <form>
      <label htmlFor="txt1">Name</label>
      <input type='text' id='txt1'></input>
      <br />
      <label htmlFor="txt2">Age</label>
      <input type='text' id='txt2'></input>
      <br />
      <button type='submit'> Calculate Sum</button>
      </form>
    </>
  )
}

export default App

