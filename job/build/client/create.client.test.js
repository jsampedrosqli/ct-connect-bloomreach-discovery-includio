"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_client_1 = require("./create.client");
jest.mock('../utils/config.utils', () => ({
    readConfiguration: jest.fn().mockReturnValue({
        projectKey: 'test-project-key',
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        scope: 'test-scope',
        region: 'test-region'
    }),
}));
describe('createApiRoot function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should create an API root with the correct project key', () => {
        const apiRoot = (0, create_client_1.createApiRoot)();
        expect(apiRoot.apiClients).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNsaWVudC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9jcmVhdGUuY2xpZW50LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBZ0Q7QUFFaEQsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDM0MsVUFBVSxFQUFFLGtCQUFrQjtRQUM5QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsTUFBTSxFQUFFLGFBQWE7S0FDdEIsQ0FBQztDQUNILENBQUMsQ0FBQyxDQUFDO0FBRUosUUFBUSxDQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtJQUN0QyxVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHdEQUF3RCxFQUFFLEdBQUcsRUFBRTtRQUNoRSxNQUFNLE9BQU8sR0FBRyxJQUFBLDZCQUFhLEdBQUUsQ0FBQztRQUVoQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==