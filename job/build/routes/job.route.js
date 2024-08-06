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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const job_controller_1 = require("../controllers/job.controller");
// Create the router for our app
const jobRouter = (0, express_1.Router)();
jobRouter.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, job_controller_1.post)(req, res);
        next();
    }
    catch (error) {
        next(error);
    }
}));
exports.default = jobRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLnJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9qb2Iucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBaUM7QUFFakMsa0VBQXFEO0FBRXJELGdDQUFnQztBQUNoQyxNQUFNLFNBQVMsR0FBVyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUVuQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDM0MsSUFBSTtRQUNGLE1BQU0sSUFBQSxxQkFBSSxFQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLEVBQUUsQ0FBQztLQUNSO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDYjtBQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxrQkFBZSxTQUFTLENBQUMifQ==