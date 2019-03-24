import k from '../src/k'

let instance;
beforeEach(() => instance = new k());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
