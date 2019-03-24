import u from '../src/u'

let instance;
beforeEach(() => instance = new u());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
