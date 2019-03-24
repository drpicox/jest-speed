import d from '../src/d'

let instance;
beforeEach(() => instance = new d());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
