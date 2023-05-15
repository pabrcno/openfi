import {
  FieldValues,
  Path,
  RegisterOptions,
  useForm,
  UseFormProps,
} from "react-hook-form";

export const useThirdPartyForm = (formProps: UseFormProps) => {
  const methods = useForm(formProps);

  const simplifiedRegister = <T extends FieldValues>(
    name: Path<T>,
    rules?: Partial<RegisterOptions>
  ) => {
    return {
      ...methods.register(name, rules),

      ref: methods.register(name, rules).ref,
      error: methods.formState.errors[name],
      helperText: methods.formState.errors[name]?.message,
    };
  };

  return {
    ...methods,
    simplifiedRegister,
  };
};
