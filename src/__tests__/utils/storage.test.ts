import { storage } from '../../utils/storage';

describe('localstorage tests', () => {
  let storageMock: {[key: string]: string} = {};
  beforeAll(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      storageMock[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn((key) => storageMock[key]);
  });

  beforeEach(() => {
    storageMock = {};
  });

  it('should set an object', () => {
    storage.set('a', 1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);
    expect(storageMock['a']).toEqual('1');
  });

  it('should get an object', () => {
    storage.set('R', 'Say what you feel.');
    const result = storage.get('R');
    expect(result).toBe('Say what you feel.');
    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);
  });
});