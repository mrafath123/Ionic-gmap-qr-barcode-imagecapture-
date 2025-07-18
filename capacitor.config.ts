import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'IonicApp',
  webDir: 'www',
  plugins: {
  "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  },
};

export default config;
