import x from '../src/x'

let instance;
beforeEach(() => instance = new x());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
