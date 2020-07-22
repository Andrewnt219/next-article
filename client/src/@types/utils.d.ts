export type OverloadedReturnType<T> = T extends {
  (...args: any[]): infer R;
  (...args: any[]): infer R;
  (...args: any[]): infer R;
  (...args: any[]): infer R;
}
  ? R
  : T extends {
      (...args: any[]): infer R;
      (...args: any[]): infer R;
      (...args: any[]): infer R;
    }
  ? R
  : T extends { (...args: any[]): infer R; (...args: any[]): infer R }
  ? R
  : T extends (...args: any[]) => infer R
  ? R
  : any;
