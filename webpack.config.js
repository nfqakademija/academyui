var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('js/app', './assets/js/app.js')

    .addStyleEntry('css/app', './assets/css/app.scss')
    .addStyleEntry('css/adminlte/admin-lte', [
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/admin-lte/dist/css/adminlte.min.css',
    ])

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/images', to: 'images'},
        { from: './node_modules/admin-lte/plugins/jquery/jquery.min.js', to: 'js/adminlte'},
        { from: './node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js', to: 'js/adminlte'},
        { from: './node_modules/admin-lte/dist/js/adminlte.min.js', to: 'js/adminlte'}
    ]))
;

module.exports = Encore.getWebpackConfig();
