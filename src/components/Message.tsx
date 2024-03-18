import React from "react";
import { SubmitButton } from "./SubmitButton";
import { useRouter } from "next/navigation";
import { siteLinks } from "@/data/sitesLinks";

const DEFAULT_ERROR_MESSAGE = `Une erreur est survenue, veuillez nous contacter en cliquant
sur le boutton ci-dessous`;
const DEFAULT_SUCCESS_MESSAGE = `Votre compte a bien été créé <br/>Vous allez recevoir vos identifiants par mail`;

const Message = ({
  isError,
  errorMessage = DEFAULT_ERROR_MESSAGE,
  isSuccess,
  successMessage = DEFAULT_SUCCESS_MESSAGE,
  reloadForm,
  canContact = true,
  reloadText = "Recharger le formulaire",
}: {
  isError: boolean;
  errorMessage?: string | React.ReactElement;
  isSuccess: boolean;
  successMessage?: string | React.ReactElement;
  reloadForm?: Function;
  reloadText?: string;
  canContact?: boolean;
}) => {
  const router = useRouter();
  const handleReload = () => {
    if (reloadForm) reloadForm();
  };
  return (
    <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
      <div
        className={`mb-2 text-2xl text-center mt-2 ${
          isError ? "text-rose-800" : "text-green-500"
        }`}
      >
        <div className="mb-2 text-lg text-center mt-2 flex flex-col gap-2">
          {typeof errorMessage === "string" ? (
            <div
              className="text-green-500"
              dangerouslySetInnerHTML={{
                __html: `
                <p class='error-message'>${isError ? errorMessage : ""}</p> 
              `,
              }}
            />
          ) : (
            <div className='error-message'>{errorMessage}</div>
          )}
          {typeof successMessage === "string" ? (
            <div
              className="text-green-500"
              dangerouslySetInnerHTML={{
                __html: `
                <p class='success-message'>${
                  isSuccess ? successMessage : ""
                }</p>
              `,
              }}
            />
          ) : (
            successMessage
          )}
          <div className="flex flex-col gap-5">
            {reloadForm && (
              <SubmitButton
                text={reloadText}
                type="button"
                onClick={handleReload}
                className={`bg-app-blue`}
              />
            )}
            {isError && canContact && (
              <SubmitButton
                text="Contactez nous"
                type="button"
                onClick={() => {
                  router.push(`${siteLinks["contact-us"].host}${siteLinks["contact-us"].path}`);
                }}
                className="bg-app-yellow !text-app-blue"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Message };
