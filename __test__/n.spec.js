import n from '../src/n'

let instance;
beforeEach(() => instance = new n());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
