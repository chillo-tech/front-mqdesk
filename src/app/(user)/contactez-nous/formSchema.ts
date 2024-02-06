import {transformToNull} from "@/utils";
import * as yup from "yup";

export const contactUsSchema = yup.object().shape(
	{
		name: yup.string().required(),
		email: yup.string().email().required(),
		phoneIndex: yup
			.string()
			.transform(transformToNull)
			.nullable()
			.when(["phone"], ([phone], field, y) => phone ? field.required() : field),
		phone: yup
			.string()
			.transform(transformToNull)
			.nullable()
			.when(["phoneIndex"], ([phoneIndex], field, y) => phoneIndex ? field.required() : field),
		message: yup.string().required(),
	},
	[["phone", "phoneIndex"]]
);
