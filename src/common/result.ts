export default class Result<T> {
  success: boolean;
  data: T;
  error?: any;

  constructor(state: boolean, data: T, error: any = undefined) {
    this.success = state;
    this.data = data;
    this.error = error;
  }
}

export const Code = {
  SUCCESS: true,
  FAIL: false,
};
