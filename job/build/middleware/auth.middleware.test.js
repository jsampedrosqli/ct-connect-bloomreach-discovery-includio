"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_middleware_1 = require("./auth.middleware");
const mockConfiguration = {
    region: 'test-region',
    projectKey: 'test-project',
    clientId: 'test-client-id',
    clientSecret: 'test-client-secret',
    scope: undefined,
};
jest.mock('../utils/config.utils', () => ({
    readConfiguration: jest.fn().mockReturnValue({
        region: 'test-region',
        projectKey: 'test-project',
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        scope: undefined,
    }),
}));
describe('authMiddlewareOptions configuration', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should use default scope when scope is not provided in configuration', () => {
        const expectedAuthMiddlewareOptions = {
            host: `https://auth.${mockConfiguration.region}.commercetools.com`,
            projectKey: mockConfiguration.projectKey,
            credentials: {
                clientId: mockConfiguration.clientId,
                clientSecret: mockConfiguration.clientSecret,
            },
            scopes: ['default'],
        };
        expect((0, auth_middleware_1.createAuthMiddlewareOptions)()).toEqual(expectedAuthMiddlewareOptions);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZS9hdXRoLm1pZGRsZXdhcmUudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFnRTtBQUVoRSxNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLE1BQU0sRUFBRSxhQUFhO0lBQ3JCLFVBQVUsRUFBRSxjQUFjO0lBQzFCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsWUFBWSxFQUFFLG9CQUFvQjtJQUNsQyxLQUFLLEVBQUUsU0FBUztDQUNqQixDQUFDO0FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsTUFBTSxFQUFFLGFBQWE7UUFDckIsVUFBVSxFQUFFLGNBQWM7UUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixZQUFZLEVBQUUsb0JBQW9CO1FBQ2xDLEtBQUssRUFBRSxTQUFTO0tBQ2pCLENBQUM7Q0FDSCxDQUFDLENBQUMsQ0FBQztBQUVKLFFBQVEsQ0FBQyxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7SUFDbkQsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRUFBc0UsRUFBRSxHQUFHLEVBQUU7UUFDOUUsTUFBTSw2QkFBNkIsR0FBRztZQUNwQyxJQUFJLEVBQUUsZ0JBQWdCLGlCQUFpQixDQUFDLE1BQU0sb0JBQW9CO1lBQ2xFLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3hDLFdBQVcsRUFBRTtnQkFDWCxRQUFRLEVBQUUsaUJBQWlCLENBQUMsUUFBUTtnQkFDcEMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLFlBQVk7YUFDN0M7WUFDRCxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDcEIsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFBLDZDQUEyQixHQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=