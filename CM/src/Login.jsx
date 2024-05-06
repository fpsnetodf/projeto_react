import { useState } from 'react'



function Login() {
  const [count, setCount] = useState(0)

  return (
    <div className="container ">
      <div className="row justify-content-center ">
        <div className="col-12 col-lg-4 mt-5 card" >
          <div className="p-3"></div>
        <form class="form-signin m-5">
          LOGIN
          <div class="text-center mb-4">       
          </div>

          <div class="form-label-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Digite seu Email" required="" autofocus=""/>
            <label for="inputEmail">Email</label>
          </div>

          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Digite sua senha" required=""/>
            <label for="inputPassword">Senha</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Lembre me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          <p class="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
        </form>    
        </div>
      </div>
    </div>
  )
}

export default Login
