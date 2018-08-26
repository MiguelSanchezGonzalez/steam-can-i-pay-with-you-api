# Can I play with you?

I'm sure at some point you've asked what games you share with your steam friends so you can play together!

If so, this API is for you!


## Development

Would you like to contribute, feel free to fork this project and open a pull request!

### .env schema

If you want to run the API on your local machine make sure you have a `.env` file on your root directory. It should follow the schema below:

<dl>
    <dt>KEY</dt>
    <dd>Steam key</dd>
    <dt>PORT</dt>
    <dd>Local API port</dd>
    <dt>WEBAPP_SERVER</dt>
    <dd>By default, cors is disabled, add here your app server so it can reach this API</dd>
</dl>

Example:

```
KEY=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
PORT=8000
WEBAPP_SERVER=http://mysite.com
```
