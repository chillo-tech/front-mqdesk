/* eslint-disable react/no-unescaped-entities */
"use client";
import { Message } from "@/components/Message";
import { COUNTRIES_CODES } from "@/utils/data";
import { ScaleLoader } from "react-spinners";
import { useSignUp } from "./useSignUp";
import Link from "next/link";

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
          {mutation.isError || mutation.isSuccess ? (
            <Message
              isError={mutation.isError}
              isSuccess={mutation.isSuccess}
              reloadForm={resetAll}
            />
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

              {/* nom */}
              <div className="flex flex-col">
                <label>Votre nom</label>

                <input
                  className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 dark:text-white rounded-md my-2"
                  {...register("lastName")}
                  type="text"
                  placeholder="Entrez votre nom"
                />
                <p className="text-rose-800">
                  {errors &&
                    errors.lastName &&
                    "Veuillez nous indiquer notre nom."}
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
                <p className="text-rose-800">
                  {errors &&
                    errors.email &&
                    "Veuillez nous indiquer notre email."}
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
              </div>
              <p>
                Mot de passe oublié?{" "}
                <Link href={"/forgot-password"} className="text-blue-400">
                  Récuperer un mot de passe
                </Link>
              </p>
              <div className="flex flex-col my-3">
                <button
                  type="submit"
                  className={
                    "text-center px-2 flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit"
                  }
                >
                  <span className="font-extralight text-white ">
                    Transmettre
                  </span>
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Inscription;
