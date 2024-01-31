"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { signUpSchema } from "./formSchema";

const description = `
<p>
  Hookdeck is the all in one platform to develop interopable event-driven applications.
</p> 
<div>
  <p>
    Unified workflow from dev to prod
  </p>
  <p class="sc-b574ec6d-0 kEunhi">
    Go live with asyncronous integrations fast
  </p>
  <p class="sc-b574ec6d-0 kEunhi">
    Full visibility across your events
  </p>
  <p class="sc-b574ec6d-0 kEunhi">
    Recover from errors without missing a beat
  </p>
</div>`;

export const useSignUp = () => {
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(signUp);
  async function signUp(obj: any) {
    const res = await axios.post("/api/backend/signUp/register", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: description,
        title: `Create your account`,
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
