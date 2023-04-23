import "./components/Auth.css";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthTitle from "./components/AuthTitle";
import AuthForm from "./components/AuthForm";
import AuthInput from "./components/AuthInput";
import AuthButton from "./components/AuthButton";
import AuthOther from "./components/AuthOther";
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
                  <a className="text-decoration-none fw-bold" href="/forgot">Zaboravljena šifra?</a>
              </div>
              <AuthButton text="Prijavi se"/>
              <AuthOther
                  message="Nemate račun? "
                  link="/register"
                  linkText="Registrujte se"
              />
          </AuthForm>
      </AuthFormContainer>
  );
}

export default Login;