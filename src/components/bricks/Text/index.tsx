import { cn } from '@/components/shadcn/lib/utils';

export type TextSizeVariant = 'xs' | 'sm' | 'md' | 'lg';
export type TextWeightVariant = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColorVariant = 'black' | 'grey' | 'destructive' | 'white' | 'green';
export type SubTextAlignmentVariant = 'bottom' | 'right';

export interface TextProps {
  text: string;
  subText?: string;
  size?: TextSizeVariant;
  weight?: TextWeightVariant;
  color?: TextColorVariant;
  subTextSize?: TextSizeVariant;
  subTextWeight?: TextWeightVariant;
  subTextColor?: TextColorVariant;
  subTextAlignment?: SubTextAlignmentVariant;
  className?: string;
  subTextClassName?: string;
  containerClassName?: string;
}

export const Text = ({
  text,
  subText,
  size = 'sm',
  weight = 'normal',
  color = 'black',
  subTextSize = 'xs',
  subTextWeight = 'normal',
  subTextColor = 'grey',
  subTextAlignment = 'bottom',
  className,
  subTextClassName,
  containerClassName,
  ...props
}: TextProps) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    black: 'text-neutral-950',
    grey: 'text-neutral-600',
    destructive: 'text-destructive',
    white: 'text-white',
    green: 'text-green-600',
  };

  const getText = () => (
    <span
      className={cn(sizeClasses[size], weightClasses[weight], colorClasses[color], className)}
      {...props}
    >
      {text}
    </span>
  );

  return subText ? (
    <div
      className={cn(
        'flex justify-center',
        subTextAlignment === 'bottom' ? 'flex-col' : 'flex-row items-center gap-1',
        containerClassName
      )}
      {...props}
    >
      {getText()}

      <span
        className={cn(
          sizeClasses[subTextSize],
          weightClasses[subTextWeight],
          colorClasses[subTextColor],
          subTextClassName
        )}
      >
        {subText}
      </span>
    </div>
  ) : (
    getText()
  );
};
