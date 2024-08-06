"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_middleware_1 = require("./error.middleware");
const custom_error_1 = __importDefault(require("../errors/custom.error"));
describe('errorMiddleware', () => {
    let error;
    let req;
    let res;
    let next;
    beforeEach(() => {
        jest.clearAllMocks();
        // @ts-ignore
        error = new Error('Test error');
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn(),
        };
        next = jest.fn();
    });
    it('should handle CustomError with status code and send JSON response', () => {
        const customError = new custom_error_1.default(400, 'Custom error message', [
            {
                statusCode: 400,
                message: 'Custom error message',
            }
        ]);
        // @ts-ignore
        (0, error_middleware_1.errorMiddleware)(customError, req, res, next);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Custom error message',
            errors: [{ message: 'Custom error message', statusCode: 400 }],
        });
        expect(next).not.toHaveBeenCalled();
    });
    it('should handle non-CustomError and send a generic error response with status 500', () => {
        (0, error_middleware_1.errorMiddleware)(error, req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith('Internal server error');
        expect(next).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IubWlkZGxld2FyZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvZXJyb3IubWlkZGxld2FyZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseURBQXFEO0FBQ3JELDBFQUFpRDtBQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksS0FBMEIsQ0FBQztJQUMvQixJQUFJLEdBQVksQ0FBQztJQUNqQixJQUFJLEdBQWEsQ0FBQztJQUNsQixJQUFJLElBQWtCLENBQUM7SUFFdkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixhQUFhO1FBQ2IsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLEdBQUcsR0FBRyxFQUFhLENBQUM7UUFDcEIsR0FBRyxHQUFHO1lBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDbEMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtTQUNPLENBQUM7UUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtRUFBbUUsRUFBRSxHQUFHLEVBQUU7UUFDM0UsTUFBTSxXQUFXLEdBQUcsSUFBSSxzQkFBVyxDQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRTtZQUNoRTtnQkFDRSxVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsc0JBQXNCO2FBQ2hDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsYUFBYTtRQUNiLElBQUEsa0NBQWUsRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUM7WUFDcEMsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDL0QsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlGQUFpRixFQUFFLEdBQUcsRUFBRTtRQUN6RixJQUFBLGtDQUFlLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==