export {};

declare global {
  interface JQuery {
    isotope: (params: Record<string, any>) => void;
    vegas: (params: Record<string, any>) => void;
  }
}
