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

Then run:

````
node index.js
````

any time you want to write all files to the gunbot directory (one level up).
