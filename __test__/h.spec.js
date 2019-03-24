import h from '../src/h'

let instance;
beforeEach(() => instance = new h());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
