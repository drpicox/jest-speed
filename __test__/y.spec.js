import y from '../src/y'

let instance;
beforeEach(() => instance = new y());

test('simple test', () => {
    expect(instance).toHaveProperty('be', true);
})
