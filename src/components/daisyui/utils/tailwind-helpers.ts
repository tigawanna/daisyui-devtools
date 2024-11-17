import type { DaisyUIThemeColorNames } from "./daisyui-theme-types.js";

export const getTailwindBg = (
  color?: DaisyUIThemeColorNames[number] 
): {
  bg: string;
  bg_muted: string;
  content: string;
} => {
  switch (color) {
    // primary
    case 'primary':
      return {
        bg: 'bg-primary',
        bg_muted: 'bg-primary/20',
        content: 'text-primary-content',
      };
    case 'primary-content':
      return {
        bg: 'bg-primary-content',
        bg_muted: 'bg-primary-content/20',
        content: 'text-primary',
      };

    // secondary
    case 'secondary':
      return {
        bg: 'bg-secondary',
        bg_muted: 'bg-secondary/20',
        content: 'text-secondary-content',
      };
    case 'secondary-content':
      return {
        bg: 'bg-secondary-content',
        bg_muted: 'bg-secondary-content/20',
        content: 'text-secondary',
      };

    // accent
    case 'accent':
      return {
        bg: 'bg-accent',
        bg_muted: 'bg-accent/20',
        content: 'text-accent-content',
      };
    case 'accent-content':
      return {
        bg: 'bg-accent-content',
        bg_muted: 'bg-accent-content/20',
        content: 'text-accent',
      };

    // neutral
    case 'neutral':
      return {
        bg: 'bg-neutral',
        bg_muted: 'bg-neutral/20',
        content: 'text-neutral-content',
      };
    case 'neutral-content':
      return {
        bg: 'bg-neutral-content',
        bg_muted: 'bg-neutral-content/20',
        content: 'text-neutral',
      };

    // base
    case 'base-100':
      return {
        bg: 'bg-base-100',
        bg_muted: 'bg-base-100/20',
        content: 'text-base-content',
      };
    case 'base-200':
      return {
        bg: 'bg-base-200',
        bg_muted: 'bg-base-200/20',
        content: 'text-base-content',
      };
    case 'base-300':
      return {
        bg: 'bg-base-300',
        bg_muted: 'bg-base-300/20',
        content: 'text-base-content',
      };
    case 'base-content':
      return {
        bg: 'bg-base-content',
        bg_muted: 'bg-base-content/20',
        content: 'text-base-100',
      };
    // info
    case 'info':
      return {
        bg: 'bg-info',
        bg_muted: 'bg-info/20',
        content: 'text-info-content',
      };
    case 'info-content':
      return {
        bg: 'bg-info-content',
        bg_muted: 'bg-info-content/20',
        content: 'text-info',
      };

    // success
    case 'success':
      return {
        bg: 'bg-success',
        bg_muted: 'bg-success/20',
        content: 'text-success-content',
      };
    case 'success-content':
      return {
        bg: 'bg-success-content',
        bg_muted: 'bg-success-content/20',
        content: 'text-success',
      };

    // warning
    case 'warning':
      return {
        bg: 'bg-warning',
        bg_muted: 'bg-warning/20',
        content: 'text-warning-content',
      };
    case 'warning-content':
      return {
        bg: 'bg-warning-content',
        bg_muted: 'bg-warning-content/20',
        content: 'text-warning',
      };

    // error
    case 'error':
      return {
        bg: 'bg-error',
        bg_muted: 'bg-error/20',
        content: 'text-error-content',
      };
    case 'error-content':
      return {
        bg: 'bg-error-content',
        bg_muted: 'bg-error-content/20',
        content: 'text-error',
      };

    default:
      return {
        bg: 'bg-base-100',
        bg_muted: 'bg-base-100/20',
        content: 'text-base-content',
      };
  }
};
