"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const custom_error_1 = __importDefault(require("../errors/custom.error"));
const logger_utils_1 = require("../utils/logger.utils");
const bloomreach_discovery_catalog_ingestion_1 = require("../services/bloomreach-discovery-catalog-ingestion");
/**
 * Exposed job endpoint.
 *
 * @param {Request} _request The express request
 * @param {Response} response The express response
 * @returns
 */
const post = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        logger_utils_1.logger.info(`Running the Bloomreach Discovery Job`);
        yield (0, bloomreach_discovery_catalog_ingestion_1.bloomreachDiscoveryCatalogIngestion)();
        logger_utils_1.logger.info(`Running the Bloomreach Discovery Job >> SUCCESS`);
        response.status(200).send();
    }
    catch (error) {
        logger_utils_1.logger.info(`Running the Bloomreach Discovery Job >> FAILURE`);
        const err = error;
        throw new custom_error_1.default(500, `${err.message} > ${err.stack}`);
    }
});
exports.post = post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvam9iLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMEVBQWlEO0FBQ2pELHdEQUErQztBQUMvQywrR0FBeUc7QUFFekc7Ozs7OztHQU1HO0FBQ0ksTUFBTSxJQUFJLEdBQUcsQ0FBTyxRQUFpQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUNsRSxJQUFJO1FBQ0YscUJBQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNwRCxNQUFNLElBQUEsNEVBQW1DLEdBQUUsQ0FBQztRQUM1QyxxQkFBTSxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDN0I7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLHFCQUFNLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDL0QsTUFBTSxHQUFHLEdBQUcsS0FBeUIsQ0FBQztRQUN0QyxNQUFNLElBQUksc0JBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQzdEO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFYVyxRQUFBLElBQUksUUFXZiJ9