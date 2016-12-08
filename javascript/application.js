/*jshint esversion: 6 */

ServiceWorkers.init();

Utils = {
  _sleep: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  sleep: async function(ms) {
    console.log('Taking a break...');
    await sleep(ms);
    console.log('Two second later');
  }
}

Utils.sleep(2000);
