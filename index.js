import { AppRegistry } from 'react-native';
import { App } from './src/basic-version/App';
// import { App } from './src/complex-version/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
