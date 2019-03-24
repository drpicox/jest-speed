import i from '../src/i'

let instance;
beforeEach(() => instance = new i());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
