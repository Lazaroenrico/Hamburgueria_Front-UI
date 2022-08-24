import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { MessageError, StyledInput } from "../../assets/styles/mixins";
import Button from "../../components/Buttons";
import { useAuth } from "../../context/auth";
import { Api } from "../../service/api";
import * as Styled from "./styled";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail está inválido")
    .required("Campo de e-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatório"),
});

const Login = () => {
  const { login } = useAuth();  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    Api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha inválido");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>Burguer Lazer</h1>
        </Styled.LoginLogoContainer>
        <StyledInput placeholder="Email" {...register("email")} />
        <StyledInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <MessageError>
          {errors.email?.message || errors.password?.message}
        </MessageError>
        <Button text="Entrar" size="large" type="submit" />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
