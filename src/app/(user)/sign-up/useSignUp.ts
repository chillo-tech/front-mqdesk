"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { signUpSchema } from "./formSchema";

const checkIcon = `<span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg" color="green" style="color: green;"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg></span>`;
const listItemStyle = `"display : flex; gap:8px; align-items:center; margin-top:8px; margin-bottom:8px"`;
const description = `
<p>
  MQ Desk est la plateforme qui vous permet d'utiliser RabbitMQ.
</p> 
<div>
  <p style=${listItemStyle}>
    ${checkIcon}Flux de travail unifié du développement à la production
  </p>
  <p style=${listItemStyle}>
    ${checkIcon}Lancez rapidement des intégrations asynchrones
  </p>
  <p style=${listItemStyle}>
    ${checkIcon}Visibilité complète sur vos événements
  </p>
  <p style=${listItemStyle}>
    ${checkIcon}Récupérez des erreurs sans rien manquer
  </p>
</div>`;

export const useSignUp = () => {
  const { setData } = useContext(ApplicationContext);
  const mutation = useMutation(signUp);
  async function signUp(obj: any) {
    const res = await axios.post("/api/backend/sign-up", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: description,
        title: `Créez votre compte`,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Sign in - MQ Desk",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const resetAll = () => {
    reset();
    mutation.reset();
  };

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync(data);
  };

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = handleSubmit(onSubmitHandler, onInvalid);

  
  return {
    register,
    errors,
    onSubmit,
    mutation,
    resetAll,
  };
};
