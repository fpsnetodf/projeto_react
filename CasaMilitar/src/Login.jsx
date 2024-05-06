
// import Botao from './Botao'

function Login() {
  

  return (
      <div className="container mt-5 ">
        <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-8 col-lg-4 col-xl-4
        ">
      <main className="form-signin w-80 ">
        <form>        
        
          <h1 className="h3 mb-5 fw-normal text-center">Login</h1>
          <div className="card p-5 ">
            <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
              Lembrar
            </label>
            {/* <Botao /> */}
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </div>
        </form>
      </main>
      </div>
    </div>
    </div>
      
  )
}

export default Login
