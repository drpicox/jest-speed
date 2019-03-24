import b from '../src/b'

let instance;
beforeEach(() => instance = new b());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
