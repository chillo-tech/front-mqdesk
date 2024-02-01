import { transformToNull } from "@/utils";
import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phoneIndex: yup.string().transform(transformToNull).nullable().optional(),
  phone: yup.string().transform(transformToNull).nullable().optional(),
});
