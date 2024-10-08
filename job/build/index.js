"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
// Import routes
const job_route_1 = __importDefault(require("./routes/job.route"));
// Import logger
const logger_utils_1 = require("./utils/logger.utils");
const config_utils_1 = require("./utils/config.utils");
const error_middleware_1 = require("./middleware/error.middleware");
// Read env variables
(0, config_utils_1.readConfiguration)();
const PORT = 8080;
// Create the express app
const app = (0, express_1.default)();
app.disable('x-powered-by');
// Define routes
app.use('/job', job_route_1.default);
// Global error handler
app.use(error_middleware_1.errorMiddleware);
// Listen the application
const server = app.listen(PORT, () => {
    logger_utils_1.logger.info(`⚡️ Job application listening on port ${PORT}`);
});
exports.default = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpQztBQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFaEIsc0RBQTJDO0FBRTNDLGdCQUFnQjtBQUNoQixtRUFBMkM7QUFFM0MsZ0JBQWdCO0FBQ2hCLHVEQUE4QztBQUU5Qyx1REFBeUQ7QUFDekQsb0VBQWdFO0FBRWhFLHFCQUFxQjtBQUNyQixJQUFBLGdDQUFpQixHQUFFLENBQUM7QUFFcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBRWxCLHlCQUF5QjtBQUN6QixNQUFNLEdBQUcsR0FBWSxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUMvQixHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTVCLGdCQUFnQjtBQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxtQkFBUyxDQUFDLENBQUM7QUFFM0IsdUJBQXVCO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0NBQWUsQ0FBQyxDQUFDO0FBRXpCLHlCQUF5QjtBQUN6QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDbkMscUJBQU0sQ0FBQyxJQUFJLENBQUMsd0NBQXdDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxNQUFNLENBQUMifQ==