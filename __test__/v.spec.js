import v from '../src/v'

let instance;
beforeEach(() => instance = new v());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
