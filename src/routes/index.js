import cors from 'cors';
import express from 'express';
import clientes from './clientesRoutes.js';
import tatuagens from './tatuagensRoutes.js';
import agendamento from './agendamentosRouters.js';
import noticias from "./noticiasRoutes.js"


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Moko Tattoo Studio" })
  })

  app.use(
    express.json(),
    cors(),
    clientes,
    tatuagens,
    agendamento,
    noticias
  )
}

export default routes
