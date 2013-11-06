# grunt-local-settings

> Grunt plugin for loading and merge custom settings from grunt config file

Your project is large? Need to use custom settings for apllication parts? Grunt-local-settings plugin provide that :)

### Usage Example

1 Specify custom working directory at your Gruntfile. Example:


```js
grunt.grunt.file.setBase(
  grunt.option('path')
)
```

2 Configure your Gruntfile tasks:

```js
// grunt-local-settings
localSettings: {
    js: {
        src:  [
            'gruntConfig.{js,coffee,yml,json}'
        ]
    }
},

// global settings example
concat: {
    src:  '*.js',
    dest: 'build.js'
}

```

3 Create customApp/gruntConfig.yml file

```yaml
concat:
  src: 
    - '*.js'
    - '!private.js'
```

4 Run grunt

```shell 
grunt -path customApp
grunt -path anotherApp
```


Now concat exclude private.js at customApp path
