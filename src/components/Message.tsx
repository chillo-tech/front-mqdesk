import React from "react";
import { SubmitButton } from "./SubmitButton";
import { useRouter } from "next/navigation";

const DEFAULT_ERROR_MESSAGE = `Quelque chose a mal tourne, vous pouvez nous contacter en cliquant
sur le boutton en bas a votre droite.`;
const DEFAULT_SUCCESS_MESSAGE = `Votre requete a bien ete prise en compte, vous serez notifies par
mail`;

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
  errorMessage?: string;
  isSuccess: boolean;
  successMessage?: string;
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
          isError ? "text-rose-800" : "text-blue-900"
        }`}
      >
        <p className="mb-2 text-lg text-center mt-2 flex flex-col gap-2">
          {isError && errorMessage}
          {isSuccess && successMessage}
          <div className="flex flex-col gap-5 items-center">
            {reloadForm && (
              <SubmitButton
                text={reloadText}
                type="button"
                onClick={handleReload}
                className={isError ? "text-sm" : ""}
              />
            )}
            {isError && canContact && (
              <SubmitButton
                text="Contactez nous"
                type="button"
                onClick={() => {
                  router.push("/contactez-nous");
                }}
                className="text-sm bg-blue-500"
              />
            )}
          </div>
        </p>
      </div>
    </div>
  );
};

export { Message };
