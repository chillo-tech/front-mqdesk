/* eslint-disable react/no-unescaped-entities */
"use client";
import { Message } from "@/components/Message";
import { COUNTRIES_CODES } from "@/utils/data";
import { ScaleLoader } from "react-spinners";
import { useSignUp } from "./useSignUp";
import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import React from "react";
import { isAxiosError } from "axios";

const Inscription = () => {
  const { register, onSubmit, errors, mutation, resetAll } = useSignUp();
  return (
    <>
      <div className="container">
        <form
          onSubmit={onSubmit}
          className={
            "max-w-[400px] text-[14px] flex relative flex-col gap-2 font-light infos p-5 bg-white border-[#292927] border-w rounded-[6px]"
          }
        >
          {(mutation.isError && !isAxiosError(mutation.error)) ||
          (mutation.isError &&
            isAxiosError(mutation.error) &&
            mutation.error.response?.status !== 406) ||
          mutation.isSuccess ? (
            isAxiosError(mutation.error) ? (
              <Message
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
                reloadForm={resetAll}
                canContact={true}
                errorMessage={
                  mutation.error.response?.status === 401
                    ? `<p>Une erreur est survenue <br/> Veuillez nous contacter en utilisant le bouton ci dessous</p>`
                    : undefined
                }
              />
            ) : (
              <Message
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
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
              <div className="">
                <p className="mb-2 font-black text-xl text-center mt-2">
                  Nouveau ? Inscrivez vous!
                </p>
              </div>
              {mutation.error && isAxiosError(mutation.error) && (
                <div>
                  une erreur est survenue{" "}
                  <p
                    className={
                      "flex flex-col md:flex-row justify-between items-center"
                    }
                  >
                    <span>Mot de passe oublié?</span>
                    <Link
                      href={"/forgot-password"}
                      className="text-app-blue underline"
                    >
                      Récuperer un mot de passe
                    </Link>
                  </p>
                </div>
              )}
              {/* nom */}
              <div className="flex flex-col">
                <label>Votre nom</label>

                <input
                  className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 dark:text-white rounded-md my-2"
                  {...register("lastName")}
                  type="text"
                  placeholder="Entrez votre nom"
                />
                <p className="text-rose-800 md:text-center">
                  {errors &&
                    errors.lastName &&
                    "Veuillez nous indiquer votre nom."}
                </p>
              </div>

              {/* email */}
              <div className="flex flex-col">
                <label>Votre email</label>
                <input
                  className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 dark:text-white rounded-md my-2"
                  type="email"
                  {...register("email")}
                  placeholder="Entrez votre email"
                />
                <p className="text-rose-800 md:text-center">
                  {errors &&
                    errors.email &&
                    "Veuillez nous indiquer votre email."}
                </p>
              </div>

              {/* index telephonique */}
              <div className="flex flex-col">
                <label>
                  Numéro de téléphone{" "}
                  <span className="italic">(Ce champ est optionnel)</span>
                </label>
                <div className="flex md:items-center justify-center gap-2 flex-col md:flex-row">
                  <select
                    className="px-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 dark:text-white rounded-md my-2 md:w-1/3 max-w-[90vw] md:max-w-full"
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
                    className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 dark:text-white rounded-md my-2 md:w-2/3"
                    {...register("phone")}
                    type="number"
                    placeholder="Entrez votre numero"
                  />
                </div>
                <p className="text-rose-800 md:text-center">
                  {errors &&
                    errors.phone &&
                    "Veuillez nous indiquer votre numero."}
                  {errors &&
                    errors.phoneIndex &&
                    "Veuillez nous indiquer votre index telephonique."}
                </p>
              </div>
              <div className="flex flex-col">
                <SubmitButton text="Créer mon compte" className="bg-app-blue" />
              </div>
              <p
                className={
                  "flex flex-col md:flex-row justify-between items-center"
                }
              >
                <span>Mot de passe oublié?</span>
                <Link
                  href={"/forgot-password"}
                  className="text-app-blue underline"
                >
                  Récuperer un mot de passe
                </Link>
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Inscription;
