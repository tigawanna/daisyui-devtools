export type GenericThemeType<K=string,V=string> = {
  name: K;
  variable: V;
  value: string;
  locked?: boolean;
  type: 'color' | 'curve' | 'theme-name' | 'color-scheme';
};
