import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviado dados : " + username + " - " + password)
    }

  return (

    
    <div className='container'>
        
        
        <form onSubmit={handleSubmit}>
            
            <h1>Acesse o sitema</h1>
            
            
            <div className='input-field'>
            <input type='email' placeholder='email'
            onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon"/>
            </div>
            
            
            <div className='input-field'>
            <input type='password' placeholder='password'
            onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className="icon"/>
            </div>
            
            
            
            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div> 

            <button>Entrar</button>
            <div className="signup">
                <p>Nao tem uma conta?</p>
                <a href="#">Registrar</a>
            </div>
        
        </form>
        <div className="titulo">Login Page | David Denis</div>
    </div>
  )
}

export default Login
