import z from '../src/z'

let instance;
beforeEach(() => instance = new z());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
