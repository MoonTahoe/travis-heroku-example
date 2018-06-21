Continuous Delivery with Travis, Heroku, and Cucumber
===============
This repository contains an example of how continuos delivery can be implemented with heroku and travis.

1. Create React App
2. Create Express Api
3. Modify the Package.json
4. Setup travis:
    1. `which travis` or `travis --help`
    2. If you need to install travis: `sudo gem install travis`
    3. Log into travis: `travis login`
    3. Create a new YML file: `travis init`, answer the question `Node`
    2. Encrypt heroku auth token: `travis encrypt $(heroku auth:token) --add deploy.api_key`