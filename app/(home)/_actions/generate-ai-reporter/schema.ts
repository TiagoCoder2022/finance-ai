import { isMatch } from "date-fns";
import { z } from "zod";

export const generateAiReporterSchema = z.object({
    month: z.string().refine(value => isMatch(value, 'MM'))
})

export type GenerateAiReporterSchema = z.infer<typeof generateAiReporterSchema>