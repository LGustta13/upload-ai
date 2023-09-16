import { prisma } from "../lib/prisma";

import { FastifyInstance } from "fastify";
import fastifyMultipart from "@fastify/multipart";

import path from "node:path";
import { randomUUID } from "node:crypto";
import fs from 'node:fs';
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline)

export async function uploadVideoRoute(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fileSize: 1_048_576 * 25, //25MB
    }
  })

  app.post('/videos', async (req, res) => {
    const data = await req.file()

    if (!data) {
      return res.status(400).send({ error: "Missing file input" })
    }

    const extension = path.extname(data.filename)

    if (extension !== '.mp3') {
      return res.status(400).send({ error: "Invalid inpupt type, please upload a MP3" })
    }

    const fileBaseName = path.basename(data.filename, extension)

    const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`

    // path.resolve(diretório atual da rota; a partir desse diretório, onde será salvo o arquivo; arquivo a ser salvo)
    const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

    // pump(rota do upload do arquivo com seus dados; rota de onde será escrito o arquivo, aos poucos )
    await pump(data.file, fs.createWriteStream(uploadDestination))

    const video = await prisma.video.create({
      data: {
        name: data.filename,
        path: uploadDestination
      }
    })

    return res.status(200).send({ video, })
  })
}