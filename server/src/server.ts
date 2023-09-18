import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideoRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompleteRoute } from "./routes/generate-ai-completion"
import { fastifyCors } from "@fastify/cors"
import 'dotenv/config'

const app = fastify()

app.register(fastifyCors, {
  origin: process.env.ORIGIN_URL || "*", // O ideal é colocar somente o endereço de onde está hospedado o Frontend
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompleteRoute)

app.listen({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 3333,
}).then(() => {
  console.log("HTTP Server Running")
})