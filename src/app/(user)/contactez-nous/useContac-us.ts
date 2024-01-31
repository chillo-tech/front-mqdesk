"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { contacUsSchema } from "./formSchema";

export const useContacUs = () => {
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(contacUs);
  async function contacUs(obj: any) {
    const res = await axios.post("/api/backend/contacUs/register", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: ``,
        title: ``,
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
    resolver: yupResolver(contacUsSchema),
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
