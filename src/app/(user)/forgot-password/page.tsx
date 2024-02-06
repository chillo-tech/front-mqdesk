/* eslint-disable react/no-unescaped-entities */
"use client";
import {Message} from "@/components/Message";
import {ScaleLoader} from "react-spinners";
import {useForgotPassword} from "./useForgotPassword";
import {SubmitButton} from "@/components/SubmitButton";
import React from "react";
import Link from "next/link";
import {isAxiosError} from "axios";

const NewPassword = () => {
	const {register, onSubmit, errors, mutation, resetAll} =
		useForgotPassword();
	return (
		<>
			<div className="container px-5 py-5 text-xl">
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
									mutation.error.response?.status === 401 ? (
										`<p className="text-red-800">Une erreur est survenue <br/> Veuillez nous contacter en utilisant le bouton ci dessous</p>`
									) : mutation.error.response?.status === 409 ? (
										<>
											<p className="error-message">
												Votre mail est inconnu <br/> Vous pouvez créer un
												compte en cliquant{" "}
												<Link
													className="font-extrabold text-app-blue hover:underline"
													href="/sign-up"
												>
													ici
												</Link>
											</p>
										</>
									) : undefined
								}
							/>
						) : (
							<Message
								isError={mutation.isError}
								isSuccess={mutation.isSuccess}
								reloadForm={resetAll}
								canContact={false}
								successMessage={
									mutation.isSuccess
										? `Votre requete a bien été prise en compte. Vous serez notifé par mail sous peu.`
										: undefined
								}
							/>
						)
					) : (
						<>
							{mutation.isLoading ? (
								<div
									className="flex absolute top-0 left-0 bg-[rgba(30,50,138,.3)] z-50 justify-center items-center h-full w-full">
									<ScaleLoader color="rgb(30,50,138)"/>
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
									className="p-2 h-[32px] bg-transparent border border-[#292927] outline-blue-500 dark:text-white rounded-md my-2"
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

							<SubmitButton
								text="Récupérer un mot de passe"
								className="bg-app-blue"
							/>
						</>
					)}
				</form>
			</div>
		</>
	);
};

export default NewPassword;
