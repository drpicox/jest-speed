import s from '../src/s'

let instance;
beforeEach(() => instance = new s());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
