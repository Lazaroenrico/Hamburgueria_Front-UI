import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import Input from "../../components/Inputs";
import * as Styled from "./styled";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      setLogged(true);
      navigate("/");
      toast.success("Login bem sucedido!");
      return;
    }

    toast.error("Usuário ou senha incorretos.");
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>Burguer Lazer</h1>
        </Styled.LoginLogoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button text="Entrar" size="large" onClick={handleLogin} />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
