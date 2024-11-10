import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'travel',
  webDir: 'out',
  // command is 'ipconfig getifaddr en0'
  server:{
    url:'http://192.168.10.206:3000',
    cleartext:true
  }
};

export default config;
