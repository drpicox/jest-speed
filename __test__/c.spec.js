import c from '../src/c'

let instance;
beforeEach(() => instance = new c());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
