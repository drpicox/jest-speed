import w from '../src/w'

let instance;
beforeEach(() => instance = new w());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
