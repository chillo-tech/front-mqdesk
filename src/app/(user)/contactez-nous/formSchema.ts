import { transformToNull } from "@/utils";
import * as yup from "yup";

export const contacUsSchema = yup.object().shape({
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneIndex: yup.string().transform(transformToNull).nullable().optional(),
  phone: yup.string().transform(transformToNull).nullable().optional(),
  message: yup.string().required(),
});
