import React from "react";
import { useForm } from "react-hook-form";
import { FC } from "react";
type FormValues = {
  email: string;
};

type FormFieldProps = {
  label: string;
  para: string;
  type: string;
  name: keyof FormValues;
  id: string;
  register: ReturnType<typeof useForm>["register"];
  errors?: any;
};
const InputWrapper: FC<FormFieldProps> = ({
  label,
  para,
  type,
  name,
  id,
  errors,
  register,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {para}
      </label>
      <input
        type={type}
        id={id}
        {...register(name)}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
      />
      <p>{errors}</p>
    </div>
  );
};

export default InputWrapper;
