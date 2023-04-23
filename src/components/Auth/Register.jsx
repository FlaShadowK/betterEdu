import "./components/Auth.css";
import AuthFormContainer from "./components/AuthFormContainer";
import AuthTitle from "./components/AuthTitle";
import AuthForm from "./components/AuthForm";
import AuthInput from "./components/AuthInput";
import AuthButton from "./components/AuthButton";
import AuthOther from "./components/AuthOther";
const Register = () => {
    return(
        <AuthFormContainer>
            <AuthTitle title="Registracija" message="Dobrodošli, započnite proces registracije"/>
            <AuthForm>
                <AuthInput
                    title="Ime"
                    name="name"
                    type="text"
                    placeholder="Unesite ime"
                />
                <AuthInput
                    title="Prezime"
                    name="surname"
                    type="text"
                    placeholder="Unesite prezime"
                />
                <AuthInput
                    title="Email"
                    name="email"
                    type="text"
                    placeholder="Unesite Vašu e-mail adresu"
                />
                <AuthInput
                    title="Lozinka"
                    name="password"
                    type="password"
                    placeholder="Kreirajte lozinku"
                />
                <AuthInput
                    title="Broj telefona"
                    name="phone"
                    type="tel"
                    placeholder="+382 (0)00 000 000"
                />
                <br/>
                <AuthButton text="Prijavi se"/>
                <AuthOther
                    message="Već imate račun? "
                    link="/login"
                    linkText="Prijavite se"
                />
            </AuthForm>
        </AuthFormContainer>
    );
}

export default Register;