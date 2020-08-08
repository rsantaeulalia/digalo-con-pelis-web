export class Decade {
  name: string;
  from: string;
  to: string;

  constructor(decade) {
    this.name = decade;
    this.from = Decade.getFromDecadeValue(decade);
    this.to = Decade.getToDecadeValue(decade);
  }

  private static getFromDecadeValue(decade: number): string {
    return `${decade}-01-01`;
  }

  private static getToDecadeValue(decade: number): string {
    return `${decade += 9}-12-31`;
  }
}
