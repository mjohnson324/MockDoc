import { getDayRange } from '../../util/appointment_util';

describe('Create date objects for organizing appointments', () => {
  test('It produces a range of dates without arguments', () => {
    expect(getDayRange()).toHaveLength(4);
    expect(getDayRange()[0].getDate()).toBe(new Date().getDate())
  });
});
