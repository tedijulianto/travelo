import { UseFormRegister, FieldValues, FieldErrors, ValidationRule } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: string | ValidationRule<boolean>;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  pattern?: ValidationRule<RegExp>;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  disabled,
  required,
  register,
  errors,
  pattern,
}) => {
  const error = errors && errors[id];

  return (
    <div>
      <label htmlFor={id} className="relative text-sm font-label w-full">
        <div className="mb-2 font-bold">{label}</div>

        <input
          autoComplete="off"
          id={id}
          disabled={disabled}
          {...register(id, { required, pattern })}
          type={type}
          formNoValidate
          placeholder={placeholder}
          className={`appearance-none border rounded-lg border-gray-70 py-3 px-4 w-full focus:outline-none focus:ring-blue-100  focus:border-blue-100 font-semibold
          ${error ? "border-rose-400" : "border-blue-100"}
          ${error ? "focus:border-rose-400" : "focus:border-blue-100"}`}
        />
      </label>
      {error && (
        <p className="text-rose-400 text-xs font-label font-bold mt-2">
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Input;
