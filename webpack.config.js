var Encore = require('@symfony/webpack-encore');

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
    .addEntry('js/adminlte/admin-lte', [
        './node_modules/admin-lte/plugins/jquery/jquery.min.js',
        './node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js',
        './node_modules/admin-lte/plugins/morris/morris.min.js',
        './node_modules/admin-lte/plugins/sparkline/jquery.sparkline.min.js',
        './node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        './node_modules/admin-lte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        './node_modules/admin-lte/plugins/knob/jquery.knob.js',
        './node_modules/admin-lte/plugins/daterangepicker/daterangepicker.js',
        './node_modules/admin-lte/plugins/datepicker/bootstrap-datepicker.js',
        './node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
        './node_modules/admin-lte/plugins/fastclick/fastclick.js',
        './node_modules/admin-lte/dist/js/adminlte.js',
        './node_modules/admin-lte/dist/js/pages/dashboard.js',
        './node_modules/admin-lte/dist/js/demo.js'
    ])

    .addStyleEntry('css/app', './assets/css/app.scss')
    .addStyleEntry('css/adminlte/admin-lte', [
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/admin-lte/dist/css/AdminLTE.min.css',
        './node_modules/admin-lte/plugins/iCheck/flat/blue.css',
        './node_modules/admin-lte/plugins/morris/morris.css',
        './node_modules/admin-lte/plugins/datepicker/datepicker3.css',
        './node_modules/admin-lte/plugins/daterangepicker/daterangepicker-bs3.css',
        './node_modules/admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
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
;

module.exports = Encore.getWebpackConfig();
