import * as yup from "yup";
import { regExpression } from "../core/regExpression";
import { messages } from "../core/message";

export const LoginSchemaValidation = yup.object().shape({
  password: yup
    .string()
    .required(messages.password)
    .matches(regExpression.passwordRegex, messages.password),

  phoneNumber: yup
    .string()
    .required(messages.phoneNumber)
    .matches(regExpression.phoneRegex, messages.phoneNumber),
});
