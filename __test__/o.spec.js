import o from '../src/o'

let instance;
beforeEach(() => instance = new o());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
