"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_middleware_1 = require("./http.middleware");
jest.mock('../utils/config.utils', () => ({
    readConfiguration: jest.fn().mockReturnValue({
        region: 'test-region',
    }),
}));
describe('httpMiddlewareOptions configuration', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should generate httpMiddlewareOptions with the correct host', () => {
        const expectedHttpMiddlewareOptions = {
            host: `https://api.test-region.commercetools.com`,
        };
        expect((0, http_middleware_1.createHttpMiddlewareOptions)('test-region')).toEqual(expectedHttpMiddlewareOptions);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5taWRkbGV3YXJlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9odHRwLm1pZGRsZXdhcmUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFnRTtBQUVoRSxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxNQUFNLEVBQUUsYUFBYTtLQUN0QixDQUFDO0NBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSixRQUFRLENBQUMscUNBQXFDLEVBQUUsR0FBRyxFQUFFO0lBQ25ELFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkRBQTZELEVBQUUsR0FBRyxFQUFFO1FBQ3JFLE1BQU0sNkJBQTZCLEdBQUc7WUFDcEMsSUFBSSxFQUFFLDJDQUEyQztTQUNsRCxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUEsNkNBQTJCLEVBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUM1RixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=