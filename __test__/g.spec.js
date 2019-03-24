import g from '../src/g'

let instance;
beforeEach(() => instance = new g());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
