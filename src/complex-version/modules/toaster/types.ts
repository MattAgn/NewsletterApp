import { ViewStyle, TextStyle } from 'react-native';

export enum ToasterActionTypes {
  ADD_TOAST = 'ADD_TOAST',
}

export interface IToasterState {
  text?: string;
  duration?: number;
  styles?: {
    container: ViewStyle;
    text: TextStyle;
  };
}
