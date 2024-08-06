import CustomError from '../errors/custom.error';
import envValidators from '../validators/env.validators';
import { getValidateMessages } from '../validators/helpers.validators';

/**
 * Read the configuration env vars
 * (Add yours accordingly)
 *
 * @returns The configuration with the correct env vars
 */
export const readConfiguration = () => {
  const envVars = {
    // clientId: process.env.CTP_CLIENT_ID as string,
    // clientSecret: process.env.CTP_CLIENT_SECRET as string,
    // projectKey: process.env.CTP_PROJECT_KEY as string,
    // scope: process.env.CTP_SCOPE,
    // region: process.env.CTP_REGION as string,
    // bloomreachDiscoveryAccountId: process.env
    //   .BLOOMREACH_DISCOVERY_ACCOUNT_ID as string,
    // bloomreachDiscoveryAuthKey: process.env
    //   .BLOOMREACH_DISCOVERY_AUTH_KEY as string,
    // bloomreachDiscoveryDomainKey: process.env
    //   .BLOOMREACH_DISCOVERY_DOMAIN_KEY as string,
    // bloomreachDiscoveryApiKey: process.env
    //   .BLOOMREACH_DISCOVERY_API_KEY as string,
    // bloomreachDiscoveryCatalogLocale:
    //   (process.env.BLOOMREACH_DISCOVERY_CATALOG_LOCALE as string) || 'en-US',
    clientId: '5drM4Rt36wOh8Ss41jVXS6IW',
    clientSecret: 'H5c-3UFQMCHTM7JfMBhV9N7sy51jkxvG',
    projectKey: 'includio2',
    scope: 'view_product_selections:includio2 manage_order_edits:includio2 manage_connectors:includio2 view_shopping_lists:includio2 view_customer_groups:includio2 view_orders:includio2 manage_products:includio2 view_customers:includio2 view_attribute_groups:includio2 view_connectors_deployments:includio2 view_audit_log:includio2 view_cart_discounts:includio2 view_messages:includio2 view_api_clients:includio2 manage_payments:includio2 manage_sessions:includio2 manage_my_business_units:includio2 manage_my_quotes:includio2 manage_associate_roles:includio2 manage_my_profile:includio2 manage_audit_log:includio2 manage_categories:includio2 view_associate_roles:includio2 create_anonymous_token:includio2 manage_connectors_deployments:includio2 view_sessions:includio2 view_categories:includio2 view_standalone_prices:includio2 manage_my_payments:includio2 manage_my_orders:includio2 manage_checkout_payment_intents:includio2 manage_my_quote_requests:includio2 manage_my_shopping_lists:includio2 manage_attribute_groups:includio2 view_quotes:includio2 manage_project:includio2 manage_orders:includio2 manage_import_containers:includio2 manage_api_clients:includio2 view_types:includio2 manage_business_units:includio2 manage_customers:includio2 view_quote_requests:includio2 view_discount_codes:includio2 view_connectors:includio2 manage_customer_groups:includio2 view_states:includio2 manage_discount_codes:includio2 view_published_products:includio2 manage_product_selections:includio2 view_stores:includio2 view_tax_categories:includio2 view_shipping_methods:includio2 manage_cart_discounts:includio2 view_products:includio2 view_staged_quotes:includio2 view_import_containers:includio2 view_order_edits:includio2 view_project_settings:includio2 view_business_units:includio2 view_payments:includio2 manage_extensions:includio2 introspect_oauth_tokens:includio2',
    region: 'europe-west1.gcp',
    bloomreachDiscoveryAccountId: '7628',
    bloomreachDiscoveryAuthKey: 'sandbox_sqli_ct-dcf79c78-dce5-489e-9f24-5f17fc606fae',
    bloomreachDiscoveryDomainKey: 'sandbox_sqli_ct',
    bloomreachDiscoveryApiKey: 'sandbox_sqli_ct-dcf79c78-dce5-489e-9f24-5f17fc606fae',
    bloomreachDiscoveryCatalogLocale: 'en',
  };

  const validationErrors = getValidateMessages(envValidators, envVars);

  if (validationErrors.length) {
    throw new CustomError(
      'InvalidEnvironmentVariablesError',
      'Invalid Environment Variables please check your .env file',
      validationErrors
    );
  }

  return envVars;
};
