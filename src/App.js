
import './App.css'
import SignInForm from './Component/FormVlidationWithYup';






function App() {
  return (
      <SignInForm/>
  );
}

export default App;

 const OptionalChaan = () => {
  const myName = {
      a :{
        b :{
           c:'Sugriv' 
        }
      }
  }  
  return (
    <>
    <div>OptionalChaan</div>
    {myName?.a?.b?.c}
    <OurData/>
    </>
  )
}
const OurData =() =>{
  return(
    <h1>Hello I am data</h1>
  )
}
