import { HourPrinterPipe } from './hour-printer.pipe';

describe('HourPrinterPipe', () => {
  it('create an instance', () => {
    const pipe = new HourPrinterPipe();
    expect(pipe).toBeTruthy();
  });
});
