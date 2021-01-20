export class StringUtils {
  public static isNullOrEmpty(val: string): boolean {
    if (val === undefined || val === null || val.trim() === '') return true;
    return false;
  }

  public static somenteNumeros(val: string): string {
    return val.replace(/[^0-9]/g, '');
  }
}
