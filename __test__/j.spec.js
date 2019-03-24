import j from '../src/j'

let instance;
beforeEach(() => instance = new j());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
