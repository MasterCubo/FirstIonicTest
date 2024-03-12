import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.firsttest',
  appName: 'firsttest',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
