import r from '../src/r'

let instance;
beforeEach(() => instance = new r());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
