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
const custom_error_1 = __importDefault(require("../errors/custom.error"));
const config_utils_1 = require("./config.utils");
const validatorHelper = __importStar(require("../validators/helpers.validators"));
// Mock process.env properties
const mockEnv = {
    CTP_REGION: 'mockRegion',
    CTP_CLIENT_ID: 'mockClientId',
    CTP_CLIENT_SECRET: 'mockClientSecret',
    CTP_PROJECT_KEY: 'mockProjectKey',
    CTP_SCOPE: 'mockScope',
    BLOOMREACH_DISCOVERY_ACCOUNT_ID: 'mockAccountId',
    BLOOMREACH_DISCOVERY_AUTH_KEY: 'mockAuthKey',
    BLOOMREACH_DISCOVERY_DOMAIN_KEY: 'mockDomainKey',
    BLOOMREACH_DISCOVERY_API_KEY: 'mockApiKey',
    BLOOMREACH_DISCOVERY_CATALOG_LOCALE: 'en-US',
    COMMERCETOOLS_DEPLOYMENT_KEY: 'mockDeploymentKey',
    BASIC_AUTH_SECRET: 'secret',
};
describe('readConfiguration', () => {
    it('should return the correct configuration when env variables are valid', () => {
        process.env = mockEnv;
        const expectedConfig = {
            clientId: 'mockClientId',
            clientSecret: 'mockClientSecret',
            projectKey: 'mockProjectKey',
            scope: 'mockScope',
            region: 'mockRegion',
            bloomreachDiscoveryAccountId: 'mockAccountId',
            bloomreachDiscoveryAuthKey: 'mockAuthKey',
            bloomreachDiscoveryDomainKey: 'mockDomainKey',
            bloomreachDiscoveryApiKey: 'mockApiKey',
            bloomreachDiscoveryCatalogLocale: 'en-US',
        };
        // Mock the validation function to return an empty array (no errors)
        jest.spyOn(validatorHelper, 'getValidateMessages').mockReturnValue([]);
        const config = (0, config_utils_1.readConfiguration)();
        expect(config).toEqual(expectedConfig);
    });
    it('should throw a CustomError when env variables are invalid', () => {
        process.env = mockEnv;
        // Mock the validation function to return validation errors
        jest
            .spyOn(validatorHelper, 'getValidateMessages')
            .mockReturnValue(['Invalid variable: CTP_CLIENT_ID']);
        expect(() => {
            (0, config_utils_1.readConfiguration)();
        }).toThrowError(custom_error_1.default);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnV0aWxzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvY29uZmlnLnV0aWxzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFpRDtBQUNqRCxpREFBbUQ7QUFDbkQsa0ZBQW9FO0FBRXBFLDhCQUE4QjtBQUM5QixNQUFNLE9BQU8sR0FBRztJQUNkLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLGFBQWEsRUFBRSxjQUFjO0lBQzdCLGlCQUFpQixFQUFFLGtCQUFrQjtJQUNyQyxlQUFlLEVBQUUsZ0JBQWdCO0lBQ2pDLFNBQVMsRUFBQyxXQUFXO0lBQ3JCLCtCQUErQixFQUFFLGVBQWU7SUFDaEQsNkJBQTZCLEVBQUUsYUFBYTtJQUM1QywrQkFBK0IsRUFBRSxlQUFlO0lBQ2hELDRCQUE0QixFQUFFLFlBQVk7SUFDMUMsbUNBQW1DLEVBQUUsT0FBTztJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUJBQWlCLEVBQUUsUUFBUTtDQUM1QixDQUFDO0FBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUNqQyxFQUFFLENBQUMsc0VBQXNFLEVBQUUsR0FBRyxFQUFFO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLE1BQU0sY0FBYyxHQUFHO1lBQ3JCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFlBQVksRUFBRSxrQkFBa0I7WUFDaEMsVUFBVSxFQUFFLGdCQUFnQjtZQUM1QixLQUFLLEVBQUUsV0FBVztZQUNsQixNQUFNLEVBQUUsWUFBWTtZQUNwQiw0QkFBNEIsRUFBRSxlQUFlO1lBQzdDLDBCQUEwQixFQUFFLGFBQWE7WUFDekMsNEJBQTRCLEVBQUUsZUFBZTtZQUM3Qyx5QkFBeUIsRUFBRSxZQUFZO1lBQ3ZDLGdDQUFnQyxFQUFFLE9BQU87U0FDMUMsQ0FBQztRQUVGLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV2RSxNQUFNLE1BQU0sR0FBRyxJQUFBLGdDQUFpQixHQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyREFBMkQsRUFBRSxHQUFHLEVBQUU7UUFDbkUsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDdEIsMkRBQTJEO1FBQzNELElBQUk7YUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDO2FBQzdDLGVBQWUsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBQSxnQ0FBaUIsR0FBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxzQkFBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9