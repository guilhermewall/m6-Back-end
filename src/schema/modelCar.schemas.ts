import { z } from "zod";
import * as Yup from "yup";

export const modelCarSchema = z.object({
  branded: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
});

export const modelCarReturnSchema = z.object({
  id: z.string(),
  branded: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
});

export const carModelUpdateSchema = Yup.object()
  .shape({
    branded: Yup.string().optional(),
    model: Yup.string().optional(),
    year: Yup.string().optional(),
    fuel: Yup.string().optional(),
  })
  .noUnknown(true); // Ignorar campos desconhecidos
