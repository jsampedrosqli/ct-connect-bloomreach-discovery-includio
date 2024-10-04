import * as dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';

// Import routes
import JobRoutes from './routes/job.route';

// Import logger
import { logger } from './utils/logger.utils';

import { readConfiguration } from './utils/config.utils';
import { errorMiddleware } from './middleware/error.middleware';

import cron from 'node-cron';

// Import Ingestion
import { bloomreachDiscoveryCatalogIngestion } from './services/bloomreach-discovery-catalog-ingestion';


// Read env variables
const envParams = readConfiguration();

const PORT = 8080;

// Create the express app
const app: Express = express();
app.disable('x-powered-by');

// Define routes
app.use('/job', JobRoutes);

// Global error handler
app.use(errorMiddleware);

// Listen the application
const server = app.listen(PORT, () => {
  logger.info(`⚡️ Job application listening on port ${PORT}`);
});

const runJob = async () => {
  try {
    logger.info('Iniciando job desde cronjob...');
    await bloomreachDiscoveryCatalogIngestion();
    logger.info('Job ejecutado correctamente desde cronjob');
  } catch (error) {
    logger.error('Error ejecutando el job desde cronjob:', error);
  }
}

cron.schedule(envParams.scheduleCron, () => runJob())

export default server;
