/* eslint-disable react/no-unescaped-entities */
"use client";
import {Message} from "@/components/Message";
import {ScaleLoader} from "react-spinners";
import {useForgotPassword} from "./useForgotPassword";
import {SubmitButton} from '@/components/SubmitButton';
import React from 'react';

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
					{mutation.isError || mutation.isSuccess ? (
						<Message
							isError={mutation.isError}
							isSuccess={mutation.isSuccess}
							reloadForm={resetAll}
						/>
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
