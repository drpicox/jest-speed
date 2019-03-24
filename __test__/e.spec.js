import e from '../src/e'

let instance;
beforeEach(() => instance = new e());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
