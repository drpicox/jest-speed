import a from '../src/a'

let instance;
beforeEach(() => instance = new a());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
