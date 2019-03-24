import t from '../src/t'

let instance;
beforeEach(() => instance = new t());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
