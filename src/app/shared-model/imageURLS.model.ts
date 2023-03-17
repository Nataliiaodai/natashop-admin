export class ImageURLSModel {
  original: string;
  large: string;
  medium: string;
  small: string;
  large_square: string;

  constructor(original = '', large = '', medium = '', small = '', large_square = '') {
    this.original = original;
    this.large = large;
    this.medium = medium;
    this.small = small;
    this.large_square = large_square;
  }
}
