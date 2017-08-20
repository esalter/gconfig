GConfig

Intended for Gunbot 3.3.2

Allows you to specify defaults, individual overrides, and master overrides for config.

Must be placed in one directory below gunbot, because it will write files to the directory one level up.  Suggested dir structure:

- Gunbot
  - gconfig

Install with:
````
npm install
````

Copy ALLPAIRS-params-sample.js to ALLPAIRS-params.js
Copy defaults-sample.js to defaults.js.

Update as needed.  ALLPAIRS will override everything, defaults are just defaults.

To make an individual pair override, create a config pair file with the same file name as gunbot expects (ie, bittrex-BTC_NEO-config.js), and customize it with 
just the parameters you want to override with it.  At minimum you'll want to put the pair name. It's in the same format as gunbot expects.

````
var config = {
  DEFAULT_CURRENCY_PAIR: 'BTC_NEO'
};
module.exports = config;
````

Then run:

````
node index.js
````

any time you want to write all files to the gunbot directory (one level up).

When you are satisfied with the config, you'll want to make the "main" ALLPAIRS-params.js file inside the gunbot directory empty, because now you'll want
to manage the config with gconfig instead.


EXPLANATION

The tool takes the defaults you specify as defaults.  Then it overrides any settings in individual pairs with those settings, for each pair.  Then finally it takes
the ALLPAIRS settings and overwrites anything already set for those settings for all pairs.  It then writes out the full config file to the main gunbot directory.  Since
Gunbot will still look for and parse its own ALLPAIRS-params.js file, you'll want to make sure it's empty if you want to let gconfig manage the pairs for you.

Adding a new pair:
This is a bit janky, I haven't played with this much but the way I do it is I create a new config inside the Gunbot UI and start the worker.  Then I create the pair inside gconfig and customize it as needed.  Finally I run 'node index.js' to write all settings and Gunbot will pick them up.
