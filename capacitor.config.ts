import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: '8Hub',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      iosClientId: '824874175174-8h68102ccb784s3dlqmquj4qdif3f647.apps.googleusercontent.com',
      androidClientId: '824874175174-a8f9k0sl1rg8tqc84dn6dscjf4njmscm.apps.googleusercontent.com', // use web application id for android
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
