/* eslint-disable react/no-unescaped-entities */
"use client";
import { pjs } from "@/app/fonts";
import { Message } from "@/components/Message";
import { SubmitButton } from "@/components/SubmitButton";
import WhatsappButton from "@/components/WhatsappButton";
import { COUNTRIES_CODES } from "@/utils/data";
import { isAxiosError } from "axios";
import { ScaleLoader } from "react-spinners";
import { useContacUs } from "./useContacUs";

const ContactezNous = () => {
  const { register, onSubmit, errors, mutation, resetAll } = useContacUs();
  return (
    <>
      <div className={`${pjs.className} text-xl`}>
        <form
          onSubmit={onSubmit}
          className={
            "max-w-[400px] text-[14px] flex relative flex-col gap-2 font-light infos p-5 bg-white border-[#292927] border-w rounded-[6px]"
          }
        >
          {mutation.isError || mutation.isSuccess ? (
            isAxiosError(mutation.error) ? (
              <Message
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
                successMessage={
                  "Nous avons reçu votre message; <br/> Nous allons revenir vers vous assez vite"
                }
                reloadForm={resetAll}
                canContact={false}
              />
            ) : (
              <Message
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
                successMessage={
                  "Nous avons reçu votre message; <br/> Nous allons revenir vers vous assez vite"
                }
                reloadForm={resetAll}
                canContact={false}
              />
            )
          ) : (
            <>
              {mutation.isLoading ? (
                <div className="flex absolute top-0 left-0 bg-[rgba(30,50,138,.3)] z-50 justify-center items-center h-full w-full">
                  <ScaleLoader color="rgb(30,50,138)" />
                </div>
              ) : null}
              <div className="text-center">
                <p className="mb-2 font-black text-2xl text-center mt-2">
                  Discutez avec notre équipe
                </p>
                <p>
                  Obtenez de l'aide pour démarrer, regarder une démo et trouver
                  la formule adaptée à votre entreprise.
                </p>
              </div>

              {/* nom */}
              <div className="flex flex-col ">
                <label>Votre nom</label>

                <input
                  className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500  rounded-md my-2"
                  {...register("name")}
                  type="text"
                  placeholder="Entrez votre nom"
                />
                <p className="text-rose-800">
                  {errors && errors.name && "Veuillez nous indiquer votre nom."}
                </p>
              </div>

              {/* email */}
              <div className="flex flex-col ">
                <label>Votre email</label>
                <input
                  className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500  rounded-md my-2"
                  type="email"
                  {...register("email")}
                  placeholder="Entrez votre email"
                />
                <p className="text-rose-800">
                  {errors &&
                    errors.email &&
                    "Veuillez nous indiquer votre email."}
                </p>
              </div>

              {/* index telephonique */}
              <div className="flex flex-col">
                <label>
                  Numéro de téléphone{" "}
                  <span className="italic text-sm">
                    (Ce champ est optionnel)
                  </span>
                </label>
                <div className="flex md:items-center justify-center gap-2 flex-col md:flex-row">
                  <select
                    className="px-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500  rounded-md my-2 md:w-1/3 max-w-[90vw] md:max-w-full"
                    {...register("phoneIndex")}
                  >
                    <option value="">Votre pays</option>
                    {COUNTRIES_CODES.map(({ name, dial_code, code }, idx) => (
                      <option
                        {...{ code }}
                        key={`${code}-${idx}`}
                        value={dial_code}
                      >
                        {`${name} (${dial_code})`}
                      </option>
                    ))}
                  </select>
                  <input
                    className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500  rounded-md my-2 md:w-2/3"
                    {...register("phone")}
                    type="number"
                    placeholder="Entrez votre numero"
                  />
                </div>
                <p className="text-rose-800">
                  {errors &&
                    errors.phone &&
                    "Veuillez nous indiquer votre numero."}
                  {errors &&
                    errors.phoneIndex &&
                    "Veuillez nous indiquer votre index telephonique."}
                </p>
              </div>

              {/* message */}
              <div className="flex flex-col">
                <label>Votre message</label>
                <textarea
                  className="my-2 py-1 px-2 bg-transparent border border-[#292927] outline-blue-500  rounded-md"
                  {...register("message")}
                  rows={4}
                />
                <p className="text-rose-800 text-sm">
                  {errors && errors.message && "Veuillez entrer votre message"}
                </p>
              </div>
              <SubmitButton text="Transmettre" className="bg-app-blue" />
            </>
          )}
          <p className="flex gap-3 text-app-blue items-center">
            <span className="flex-1 h-px bg-app-blue items-center"></span>
            <span className="flex-none"> OU </span>
            <span className="flex-1 h-px bg-app-blue items-center"></span>
          </p>
          <WhatsappButton />
        </form>
      </div>
    </>
  );
};

export default ContactezNous;
