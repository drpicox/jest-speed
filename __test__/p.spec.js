import p from '../src/p'

let instance;
beforeEach(() => instance = new p());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
