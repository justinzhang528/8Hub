import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: '8Hub',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      iosClientId: '824874175174-8h68102ccb784s3dlqmquj4qdif3f647.apps.googleusercontent.com',
      androidClientId: '824874175174-2cvaf9uup283iaeou0059e21dgdflup3.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
