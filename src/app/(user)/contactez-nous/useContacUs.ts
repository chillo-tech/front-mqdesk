"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { contactUsSchema } from "./formSchema";

export const useContacUs = () => {
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(contacUs);

  async function contacUs(obj: any) {
    const res = await axios.post("/api/backend/contact-us", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: `Obtenez de l'aide pour démarrer, configurez une démo ou trouvez le plan adapté à votre entreprise.`,
        title: `Discutez avec notre équipe`,
        displayImage: true,
      },
      metaData: {
        description:
          "Pour toutes vos questions sur notre saas et rabbitmq, contactez-nous",
        title: "Contactez nous - MQ Desk",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactUsSchema),
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
