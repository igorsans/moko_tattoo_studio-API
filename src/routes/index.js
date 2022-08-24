import cors from 'cors';
import express from 'express';
import clientes from './clientesRoutes.js';
import tatuagens from './tatuagensRoutes.js';


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: "Moko Tattoo Studio" })
  })

  app.use(
    express.json(),
    cors(),
    clientes,
    tatuagens
  )
}

export default routes
