import './global.css';
export { default as Button } from './components/Button';
export { default as CheckBox } from './components/CheckBox';
export { default as Icon } from './components/Icon/Icon';
export { default as Input } from './components/Input';
export { default as Radio } from './components/Radio';
export { default as Tag } from './components/Tag';
export { default as Text } from './components/Text';
export * from './components/Icon/Icons';
export * from './styles';

export type TButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TButtonVariant = 'default' | 'outlined';
export type TButtonColor = 'blue' | 'black';
export type TFontSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';
export type TFontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type TInputSize = 'sm' | 'md' | 'lg' | 'xl';
