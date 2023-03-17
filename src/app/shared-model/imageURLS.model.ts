export class ImageURLSModel {
  original: string;
  large: string;
  medium: string;
  small: string;
  large_square: string;

  constructor(original: string = '', large: string = '', medium: string = '', small: string = '', large_square: string = '') {
    this.original = original;
    this.large = large;
    this.medium = medium;
    this.small = small;
    this.large_square = large_square;
  }
}
