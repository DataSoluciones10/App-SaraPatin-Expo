
import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';



export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'normal' | 'h1' | 'h2' | 'h3' | 'semi-bold';
  className?: string;
  bold?: boolean;
};






export const ThemedText = ({ style, lightColor, darkColor, type='normal', className, bold, ...rest }: ThemedTextProps) => {

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (

      <Text
        style={[{ color }]}
        className={[
          // 'text-light-text dark:text-dark-text',
          type === 'normal' ? 'font-normal' : undefined,
          type === 'h1' ? 'text-4xl' : undefined,
          type === 'h2' ? 'text-2xl' : undefined,
          type === 'h3' ? 'text-xl' : undefined,
          type === 'semi-bold' ? 'font-semibold' : undefined,
          bold && 'font-bold', 'font-kanitRegular',
          className,
        ].join(' ')}
        {...rest}
      />

  );
}

