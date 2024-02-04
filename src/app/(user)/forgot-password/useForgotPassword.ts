"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { forgotPasswordSchema } from "./formSchema";

export const useForgotPassword = () => {
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(signIn);
  async function signIn(obj: any) {
    const res = await axios.post("/api/backend/password", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: "Vous recevrez un nouveau mot de passe dans votre mail.",
        title: `Récuperer un mot de passe`,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Mot de passe oublié - MQ Desk",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
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
