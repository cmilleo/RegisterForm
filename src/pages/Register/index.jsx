import React from "react";

import { Container, Form } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { MdMailOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import Waves from "../../components/Waves";
import Wave from "react-wavify";

const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Minimo 3 caracteres"),
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();
  function submit(data) {
    history.push(`/principal/${data.username}`);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(submit)}>
        <TextField
          label="Nome"
          {...register("username")}
          variant="standard"
          fullWidth
          error={!!errors.username}
          helperText={errors?.username?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IoPersonOutline color="#fff" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="E-mail"
          {...register("email")}
          variant="standard"
          fullWidth
          type="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MdMailOutline color="#fff" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Senha"
          {...register("password")}
          variant="standard"
          fullWidth
          type="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RiLockPasswordLine color="#fff" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirme sua Senha"
          {...register("confirmPassword")}
          variant="standard"
          fullWidth
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors?.confirmPassword?.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <RiLockPasswordLine color="#fff" />
              </InputAdornment>
            ),
          }}
        />
        <input type="submit" value="Cadastrar" />
      </Form>
      <Wave fill="#000" />
    </Container>
  );
};

export default Register;
