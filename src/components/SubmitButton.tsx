import React from "react";

const SubmitButton = ({
						  text,
						  type = "submit",
						  ...rest
					  }: {
	text: string;
	type?: "button" | "submit";
	[p: string]: any;
}) => {
	return (
		<button
			type={type}
			{...rest}
			className={`text-white text-center shadow-sm rounded-md py-1 ${rest.className}`}
		>
			{text}
		</button>
	);
};

export {SubmitButton};
