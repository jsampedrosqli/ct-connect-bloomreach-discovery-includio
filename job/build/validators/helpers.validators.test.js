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
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const validationHelpers = __importStar(require("./helpers.validators"));
const stringValidator = [
    validationHelpers.standardString(['clientId'], {
        code: 'InValidClientId',
        message: 'Client id should be 24 characters.',
        referencedBy: 'environmentVariables',
    }, { min: 24, max: 24 }),
];
const keyValidator = [
    validationHelpers.standardKey(['projectKey'], {
        code: 'InvalidProjectKey',
        message: 'Project key should be a valid string.',
        referencedBy: 'environmentVariables',
    }),
];
const regionValidator = [
    validationHelpers.region(['region'], {
        code: 'InvalidRegion',
        message: 'Not a valid region.',
        referencedBy: 'environmentVariables',
    }),
];
const urlValidator = [
    validationHelpers.standardUrl(['url'], {
        code: 'InvalidUrl',
        message: 'Not a valid url.',
        referencedBy: 'environmentVariables',
    }),
];
const scopeValidator = [
    validationHelpers.optional(validationHelpers.standardString)(['url'], {
        code: 'InvalidScope',
        message: 'Scope should be at least 2 characters long.',
        referencedBy: 'environmentVariables',
    }, { min: 2, max: undefined }),
];
(0, globals_1.describe)('Validation Helpers', () => {
    (0, globals_1.describe)('standardString', () => {
        (0, globals_1.it)('should validate a standard string', () => {
            const envVars = { clientId: 'mockClientIdgki76kjhgkur' };
            const validationErrors = validationHelpers.getValidateMessages(stringValidator, envVars);
            (0, globals_1.expect)(validationErrors.length).toBe(0);
        });
        (0, globals_1.it)('should validate a valid region', () => {
            const envVars = { region: 'us-central1.gcp' };
            const validationErrors = validationHelpers.getValidateMessages(regionValidator, envVars);
            (0, globals_1.expect)(validationErrors.length).toBe(0);
        });
        (0, globals_1.it)('should fail on an invalid region', () => {
            const envVars = { region: 'us-central1.gcp-invalid' };
            const validationErrors = validationHelpers.getValidateMessages(regionValidator, envVars);
            (0, globals_1.expect)(validationErrors.length).toBe(1);
        });
        (0, globals_1.it)('should fail on an invalid url', () => {
            const envVars = { url: 'http:/invalid-url.com' };
            const validationErrors = validationHelpers.getValidateMessages(urlValidator, envVars);
            (0, globals_1.expect)(validationErrors.length).toBe(1);
        });
        (0, globals_1.it)('should succeed on undefined scope', () => {
            const envVars = {};
            const validationErrors = validationHelpers.getValidateMessages(scopeValidator, envVars);
            (0, globals_1.expect)(validationErrors.length).toBe(0);
        });
        (0, globals_1.it)('should validate a key', () => {
            const envVars = { projectKey: 'mock-project-key' };
            const validationErrors = validationHelpers.getValidateMessages(keyValidator, envVars);
            (0, globals_1.expect)(validationErrors.length).toBe(0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy52YWxpZGF0b3JzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdG9ycy9oZWxwZXJzLnZhbGlkYXRvcnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFEO0FBRXJELHdFQUEwRDtBQUUxRCxNQUFNLGVBQWUsR0FBRztJQUN0QixpQkFBaUIsQ0FBQyxjQUFjLENBQzlCLENBQUMsVUFBVSxDQUFDLEVBQ1o7UUFDRSxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE9BQU8sRUFBRSxvQ0FBb0M7UUFDN0MsWUFBWSxFQUFFLHNCQUFzQjtLQUNyQyxFQUNELEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQ3JCO0NBQ0YsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzVDLElBQUksRUFBRSxtQkFBbUI7UUFDekIsT0FBTyxFQUFFLHVDQUF1QztRQUNoRCxZQUFZLEVBQUUsc0JBQXNCO0tBQ3JDLENBQUM7Q0FDSCxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDbkMsSUFBSSxFQUFFLGVBQWU7UUFDckIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixZQUFZLEVBQUUsc0JBQXNCO0tBQ3JDLENBQUM7Q0FDSCxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUc7SUFDbkIsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckMsSUFBSSxFQUFFLFlBQVk7UUFDbEIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixZQUFZLEVBQUUsc0JBQXNCO0tBQ3JDLENBQUM7Q0FDSCxDQUFDO0FBRUYsTUFBTSxjQUFjLEdBQUc7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