"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { signInSchema } from "./formSchema";

const description = `
  <p>
    Sign into your account to access your dashboard.d
  </p>
`;

export const useForgotPassword = () => {
  const { setData } = useContext(ApplicationContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const mutation = useMutation(signIn);
  async function signIn(obj: any) {
    const res = await axios.post("/api/backend/login", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: description,
        title: `Welcome back!`,
      },
      metaData: {
        description: "",
        title: "",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signInSchema),
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
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return {
    register,
    errors,
    onSubmit,
    mutation,
    resetAll,
    isPasswordVisible,
    handleTogglePasswordVisibility,
  };
};
