import "./Auth.css";
import AuthTitle from "./AuthTitle";
import AuthForm from "./AuthForm";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthOther from "./AuthOther";
import AuthFormContainer from "./AuthFormContainer";

const AuthReset = () => {
  return (
      <AuthFormContainer>
          <AuthTitle title="Pronađite svoj račun" message="Ne brinite, Vaš račun će se brzo vratiti"/>
          <AuthForm>
              <AuthInput
                  title="Email"
                  name="username"
                  type="text"
                  placeholder="Unesite e-mail adresu vašeg naloga"
              />
              <br/>
              <AuthButton text="Dalje"/>
              <AuthOther
                  message="Sjetili ste se? "
                  link="/login"
                  linkText="Prijavite se"
              />
          </AuthForm>
      </AuthFormContainer>
  );
}

export default AuthReset;