# grunt-concat-properties

> Grunt plugin for loading and merge settings from grunt config file

### Usage Examples

```js
concatProperties: {
    js: {
        indentation: '     ',
        sourceProcessor: function () {} || null
        initFiles: [
            '**/init.js',
            '!init.js'
        ],
        src:  [
            '{**/,}*.js',
            '!{**/,}init.js'
        ],
        dest: 'build/properties.js'
    }
};