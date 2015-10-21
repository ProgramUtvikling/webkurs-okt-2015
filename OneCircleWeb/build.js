({
    baseUrl: "scripts",             // Defaults to . (current directory)
    exclude: [],
    mainConfigFile: "scripts/app.js",
    name: "app",                 // Name of .js-file to be optimized
    out: "main-opt.js",           // The output file (optimized script)
    optimize: "uglify2"              // Skips minification to speed up builds
})
