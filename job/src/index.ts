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

cron.schedule(envParams.scheduleCron, async () => {
  try {
    logger.info('Running the Bloomreach Discovery Job (Custom CronExpression)');
    await bloomreachDiscoveryCatalogIngestion();
    logger.info('Running the Bloomreach Discovery Job >> SUCCESS');
  } catch (error) {
    logger.error('Running the Bloomreach Discovery Job >> FAILURE', error);
  }
})

export default server;
