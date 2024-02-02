/* eslint-disable react/no-unescaped-entities */
"use client";
import { Message } from "@/components/Message";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ScaleLoader } from "react-spinners";
import { useForgotPassword } from "./useForgotPassword";

const Home = () => {
  const { register, onSubmit, errors, mutation, resetAll } =
    useForgotPassword();
  return (
    <>
      <div className="container px-5 py-5 ">
        <form
          onSubmit={onSubmit}
          className={
            "max-w-[400px] text-[14px] flex relative flex-col gap-2 font-light infos p-5 bg-[#1b1b19] border-[#292927] border-w rounded-[6px] text-white"
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
                <p className="mb-2 font-black text-2xl text-center mt-2">
                  Récuperer un mot de passe
                </p>
              </div>

              {/* email */}
              <div className="flex flex-col">
                <label>Votre email</label>
                <input
                  className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 text-white rounded-md my-2"
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

              <div className="flex flex-col my-3">
                <button
                  type="submit"
                  className={
                    "text-center px-2 text-md flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit"
                  }
                >
                  <span className="font-extralight text-white ">Envoyer</span>
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;
