import q from '../src/q'

let instance;
beforeEach(() => instance = new q());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
