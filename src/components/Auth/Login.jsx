import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import AuthFormContainer from "./AuthFormContainer";
import AuthTitle from "./AuthTitle";
import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthOther from "./AuthOther";
const Login = () => {
  return(
      <AuthFormContainer>
          <AuthTitle title="Prijava" message="Dobrodošli nazad! Prijavite se"/>
          <AuthForm>
              <AuthInput
                  title="Email"
                  name="username"
                  type="text"
                  placeholder="Unesite e-mail adresu"
              />
              <AuthInput
                  title="Lozinka"
                  name="password"
                  type="password"
                  placeholder="Unesite lozinku"
              />
              <div className="mt-4 mb-4 d-flex justify-content-between">
                  <div>
                      <input className="form-check-input" type="checkbox" name="remember_me"/>
                      <label className="form-check-label" htmlFor="remember_me">⠀Zapamti me</label>
                  {/*                                        ovo nije space ----^   */}
                  </div>
                  <a className="text-decoration-none fw-bold" href="#">Zaboravljena šifra?</a>
              </div>
              <AuthButton text="Prijavi se"/>
              <AuthOther
                  message="Nemate račun? "
                  link="#"
                  linkText="Registrujte se"
              />
          </AuthForm>
      </AuthFormContainer>
  );
}

export default Login;