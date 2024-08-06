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
const jest_fetch_mock_1 = __importDefault(require("jest-fetch-mock"));
const custom_error_1 = __importDefault(require("../errors/custom.error"));
const CatalogIngestionService = __importStar(require("../services/bloomreach-discovery-catalog-ingestion"));
const job_controller_1 = require("./job.controller");
jest_fetch_mock_1.default.enableMocks();
describe('post', () => {
    let mockRequest;
    let mockResponse;
    beforeEach(() => {
        // Initialize mocks for Request and Response
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };
    });
    afterEach(() => {
        jest.restoreAllMocks(); // Restore all mocked functions after each test
    });
    it('should call bloomreachDiscoveryCatalogIngestion and respond with 200 on success', () => __awaiter(void 0, void 0, void 0, function* () {
        // Create a spy on the bloomreachDiscoveryCatalogIngestion function
        const spyIngestion = jest.spyOn(CatalogIngestionService, 'bloomreachDiscoveryCatalogIngestion');
        spyIngestion.mockResolvedValue(undefined);
        yield (0, job_controller_1.post)(mockRequest, mockResponse);
        expect(spyIngestion).toHaveBeenCalledTimes(1);
        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.send).toHaveBeenCalledWith();
        spyIngestion.mockRestore(); // Restore the spy after the test
    }));
    it('should handle errors and throw a CustomError', () => __awaiter(void 0, void 0, void 0, function* () {
        // Create a spy on the bloomreachDiscoveryCatalogIngestion function
        const spyIngestion = jest.spyOn(CatalogIngestionService, 'bloomreachDiscoveryCatalogIngestion');
        const mockError = new Error('Test error');
        spyIngestion.mockRejectedValue(mockError);
        try {
            yield (0, job_controller_1.post)(mockRequest, mockResponse);
        }
        catch (error) {
            expect(error).toBeInstanceOf(custom_error_1.default);
        }
        spyIngestion.mockRestore(); // Restore the spy after the test
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9iLmNvbnRyb2xsZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9qb2IuY29udHJvbGxlci50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBd0M7QUFFeEMsMEVBQWlEO0FBQ2pELDRHQUE4RjtBQUM5RixxREFBd0M7QUFFeEMseUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUV4QixRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNwQixJQUFJLFdBQTZCLENBQUM7SUFDbEMsSUFBSSxZQUErQixDQUFDO0lBRXBDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCw0Q0FBNEM7UUFDNUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixZQUFZLEdBQUc7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLGNBQWMsRUFBRTtZQUNsQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtTQUNoQixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsK0NBQStDO0lBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlGQUFpRixFQUFFLEdBQVMsRUFBRTtRQUMvRixtRUFBbUU7UUFDbkUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ2hHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQyxNQUFNLElBQUEscUJBQUksRUFBQyxXQUFzQixFQUFFLFlBQXdCLENBQUMsQ0FBQztRQUU3RCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFakQsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsaUNBQWlDO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOENBQThDLEVBQUUsR0FBUyxFQUFFO1FBQzVELG1FQUFtRTtRQUNuRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLHFDQUFxQyxDQUFDLENBQUM7UUFDaEcsTUFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLElBQUk7WUFDRixNQUFNLElBQUEscUJBQUksRUFBQyxXQUFzQixFQUFFLFlBQXdCLENBQUMsQ0FBQztTQUM5RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxzQkFBVyxDQUFDLENBQUM7U0FDM0M7UUFFRCxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxpQ0FBaUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=