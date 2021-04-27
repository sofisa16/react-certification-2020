const storage = {
  get: (key: string): Record<string, unknown> => {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue ? rawValue : '{}');
    }
    catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return {};
    }
  },

  set: (key: string, value: unknown): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };