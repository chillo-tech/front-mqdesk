/* eslint-disable react/no-unescaped-entities */
"use client";
import { Message } from "@/components/Message";
import { useSignUp } from "./useSignUp";
import { ScaleLoader } from "react-spinners";
import { COUNTRIES_CODES } from "@/utils/data";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    resetAll,
    handleTogglePasswordVisibility,
    isPasswordVisible,
  } = useSignUp();
  return (
    <>
      <div className="container px-5 py-5 ">
        <form
          onSubmit={onSubmit}
          className={
            "flex relative flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
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
                  Nouveau ? Inscrivez vous!
                </p>
              </div>

              {/* nom */}
              <div className="flex flex-col text-xl">
                <label>Votre nom</label>

                <input
                  className="p-2 text-black rounded-md text-xl my-2"
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
              <div className="flex flex-col text-xl">
                <label>Votre email</label>
                <input
                  className="p-2 text-black rounded-md text-xl my-2"
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

              {/* mot de passe */}
              <div className="flex flex-col text-xl">
                <label>Votre mot de passe</label>

                <div className="relative my-2">
                  <input
                    className="p-2 text-black rounded-md text-xl w-full"
                    {...register("password")}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Entrez votre mot de passe"
                  />
                  <div
                    className="absolute top-[50%] translate-y-[-50%] right-3 cursor-pointer"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <FaEyeSlash title="hide" />
                    ) : (
                      <FaEye title="view" />
                    )}
                  </div>
                </div>
                <p className="text-rose-800">
                  {errors &&
                    errors.password &&
                    "Veuillez nous indiquer notre mot de passe."}
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
                    className="px-2 py-1 text-black rounded-md h-[36px] md:w-1/3 max-w-[90vw] md:max-w-full"
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
                    className="px-2 py-1 text-black rounded-md md:w-2/3"
                    {...register("phone")}
                    type="number"
                    placeholder="Entrez votre numero"
                  />
                </div>
              </div>

              <div className="flex flex-col text-xl my-3">
                <button
                  type="submit"
                  className={
                    "text-center px-2 flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit"
                  }
                >
                  <span className="font-extralight text-xl text-white ">
                    Transmettre
                  </span>
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      {/* {process.env.NEXT_PUBLIC_NEWSLETTERS_ANALYTICS && (
        <Analytics ga_id={process.env.NEXT_PUBLIC_NEWSLETTERS_ANALYTICS} />
      )} */}
    </>
  );
};

export default Home;
