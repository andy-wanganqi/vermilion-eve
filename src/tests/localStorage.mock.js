Object.defineProperty(window, "localStorage", {
  value: (function () {
    var store = {};
    return {
      getItem: function (key) {
        // console.log('getItem called');
        return store[key];
      },
      setItem: function (key, value) {
        // console.log('setItem called');
        store[key] = value.toString();
      },
      clear: function () {
        // console.log('clear called');
        store = {}; 
      },
      removeItem: function (key) {
        // console.log('removeItem called');
        delete store[key];
      },
    };
  })(),
});
