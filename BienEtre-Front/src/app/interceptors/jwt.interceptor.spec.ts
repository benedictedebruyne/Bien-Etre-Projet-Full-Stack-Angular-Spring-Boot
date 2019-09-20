import { JwtInterceptor } from './jwt.interceptor';

describe('Jwt', () => {
  it('should create an instance', () => {
    // expect(new Jwt()).toBeTruthy();
    expect(new JwtInterceptor()).toBeTruthy();
  });
});
