export class Decade {
  name: string;
  from: string;
  to: string;

  constructor(decade) {
    this.name = decade;
    this.from = Decade.getFromYearValue(decade);
    this.to = Decade.getToYearValue(decade);
  }

  private static getFromYearValue(decade: number): string {
    return `${decade}-01-01`;
  }

  private static getToYearValue(decade: number): string {
    return `${decade}-12-31`;
  }
}
