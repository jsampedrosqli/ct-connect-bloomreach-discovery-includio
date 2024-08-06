"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthMiddlewareOptions = void 0;
const config_utils_1 = require("../utils/config.utils");
/**
 * Configure Middleware. Example only. Adapt on your own
 */
const createAuthMiddlewareOptions = () => ({
    host: `https://auth.${(0, config_utils_1.readConfiguration)().region}.commercetools.com`,
    projectKey: (0, config_utils_1.readConfiguration)().projectKey,
    credentials: {
        clientId: (0, config_utils_1.readConfiguration)().clientId,
        clientSecret: (0, config_utils_1.readConfiguration)().clientSecret,
    },
    scopes: [
        ((0, config_utils_1.readConfiguration)().scope
            ? (0, config_utils_1.readConfiguration)().scope
            : 'default'),
    ],
});
exports.createAuthMiddlewareOptions = createAuthMiddlewareOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmUvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHdEQUEwRDtBQUMxRDs7R0FFRztBQUNJLE1BQU0sMkJBQTJCLEdBQWdDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDN0UsSUFBSSxFQUFFLGdCQUFnQixJQUFBLGdDQUFpQixHQUFFLENBQUMsTUFBTSxvQkFBb0I7SUFDcEUsVUFBVSxFQUFFLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQyxVQUFVO0lBQzFDLFdBQVcsRUFBRTtRQUNYLFFBQVEsRUFBRSxJQUFBLGdDQUFpQixHQUFFLENBQUMsUUFBUTtRQUN0QyxZQUFZLEVBQUUsSUFBQSxnQ0FBaUIsR0FBRSxDQUFDLFlBQVk7S0FDL0M7SUFDRCxNQUFNLEVBQUU7UUFDTixDQUFDLElBQUEsZ0NBQWlCLEdBQUUsQ0FBQyxLQUFLO1lBQ3hCLENBQUMsQ0FBQyxJQUFBLGdDQUFpQixHQUFFLENBQUMsS0FBSztZQUMzQixDQUFDLENBQUMsU0FBUyxDQUFXO0tBQ3pCO0NBQ0YsQ0FBQyxDQUFDO0FBWlUsUUFBQSwyQkFBMkIsK0JBWXJDIn0=