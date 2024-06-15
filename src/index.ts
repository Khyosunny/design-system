import './global.css';
export { default as Button } from './components/Button';
export { default as Icon } from './components/Icon/Icon';
export * from './components/Icon/Icons';
export * from './styles';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonVariant = 'default' | 'outlined';
export type ButtonColor = 'blue' | 'black';
export type FontSize =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'body4';
export type FontWeight = 'light' | 'regular' | 'medium' | 'bold';
export type InputSize = 'sm' | 'md' | 'lg' | 'xl';
