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
      className={
        "text-xl text-white select-none text-center px-2 flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit " +
        (rest.className || "")
      }
    >
      <span className="font-extralight select-none">
        {text}
      </span>
    </button>
  );
};

export { SubmitButton };
