import m from '../src/m'

let instance;
beforeEach(() => instance = new m());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
