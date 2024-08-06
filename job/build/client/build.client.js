"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const sdk_client_v2_1 = require("@commercetools/sdk-client-v2");
const auth_middleware_1 = require("../middleware/auth.middleware");
const http_middleware_1 = require("../middleware/http.middleware");
const config_utils_1 = require("../utils/config.utils");
/**
 * Create a new client builder.
 * This code creates a new Client that can be used to make API calls
 */
const createClient = () => new sdk_client_v2_1.ClientBuilder()
    .withProjectKey((0, config_utils_1.readConfiguration)().projectKey)
    .withClientCredentialsFlow((0, auth_middleware_1.createAuthMiddlewareOptions)())
    .withHttpMiddleware((0, http_middleware_1.createHttpMiddlewareOptions)((0, config_utils_1.readConfiguration)().region))
    .build();
exports.createClient = createClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9idWlsZC5jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0VBQTZEO0FBQzdELG1FQUE0RTtBQUM1RSxtRUFBNEU7QUFDNUUsd0RBQTBEO0FBRTFEOzs7R0FHRztBQUNJLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUMvQixJQUFJLDZCQUFhLEVBQUU7S0FDaEIsY0FBYyxDQUFDLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQyxVQUFVLENBQUM7S0FDOUMseUJBQXlCLENBQUMsSUFBQSw2Q0FBMkIsR0FBRSxDQUFDO0tBQ3hELGtCQUFrQixDQUFDLElBQUEsNkNBQTJCLEVBQUMsSUFBQSxnQ0FBaUIsR0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNFLEtBQUssRUFBRSxDQUFDO0FBTEEsUUFBQSxZQUFZLGdCQUtaIn0=