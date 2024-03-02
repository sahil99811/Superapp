import LeftBanner from "../components/LeftBanner"
import RegisterForm from '../components/register/RegisterForm'

function Register() {
  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",justifyContent:"space-between"}}>
     <LeftBanner/>
     <RegisterForm></RegisterForm>
    </div>
  )
}
export default Register