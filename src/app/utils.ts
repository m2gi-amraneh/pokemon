export class Utils {
    static isNotNull<T>(obj: T | null | undefined): obj is T {
      return obj !== null && obj !== undefined;
    }}