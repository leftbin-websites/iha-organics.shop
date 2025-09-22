import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without authentication
export const base44 = createClient({
  appId: "68d116986fed7ade8014cc81", 
  requiresAuth: false // Authentication not needed for public website
});
