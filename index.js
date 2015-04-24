var Metalsmith   = require('metalsmith');
var Handlebars   = require('handlebars');
var ignore       = require('metalsmith-ignore');
var metadata     = require('metalsmith-metadata');
var collections  = require('metalsmith-collections');
var sass         = require('metalsmith-sass');
var markdown     = require('metalsmith-markdown');
var permalinks   = require('metalsmith-permalinks');
var templates    = require('metalsmith-templates');
var htmlMin      = require('metalsmith-html-minifier');
var circularJSON = require('circular-json');
var browserSync  = require('browser-sync');

/**
* 'fs' comes with node so it won't be in the package.json
* Gives access to the file system paths
* https://nodejs.org/api/fs.html
**/
var fs = require('fs');

browserSync({
  server: 'build',
  files: ['src/**/*.md', 'src/**/*.scss', 'src/**/*.js', 'templates/**/*.hbs'],
  // logLevel: 'debug',
  notify: false,
  middleware: function (req, res, next) {
    build(next);
  }
});


function build (callback) {
  var metalsmith   = new Metalsmith(__dirname);
  metalsmith.use( ignore(['**/.DS_Store']) );

  metalsmith.use( metadata({
    site: '_metadata/config.yaml'
  }) );

  metalsmith.use( collections({
    lab: {
      pattern: 'lab/*.md'
    },
    notations: {
      pattern: 'notations/*.md'
    }
  }) );

  metalsmith.use( sass({
    outputStyle: 'compressed',
    outputDir: 'css/'
  }) );

  metalsmith.use( markdown({
    typographer: true,
    html: true
  }) );

  metalsmith.use( permalinks({
    pattern: ':collection/:title'
  }) );

  metalsmith.use( templates({
    engine: 'handlebars',
    directory: 'templates'
  }) );

  metalsmith.use( htmlMin() );

  metalsmith.build( function (err) {
    if (err) throw err;
    callback();
  } );
}

Handlebars.registerPartial({
  head: fs.readFileSync(__dirname + '/templates/partials/head.hbs').toString(),
  footer: fs.readFileSync(__dirname + '/templates/partials/footer.hbs').toString()
});

Handlebars.registerHelper({
  debug: function (context) {
    return new Handlebars.SafeString(
      '<div class="debug">' + circularJSON.stringify(context) + '</div>'
    );
  },
  pageTitle: function (title, options) {
    var siteTitle = options.data.root.site.title;
    var pageTitle = title ? title + ' :: ' + siteTitle : siteTitle ;

    return new Handlebars.SafeString(pageTitle);
  },
  slug: function (title, options) {
    var slug = title ? title.replace(/\W+/g, '-').toLowerCase() : '';

    return new Handlebars.SafeString(slug);
  },
  pageDescription: function (description, options) {
    var siteDescription = options.data.root.site.description;
    var pageDescription = description ? description : siteDescription;

    return new Handlebars.SafeString(pageDescription);
  },
  featuredImg: function (image, options) {
    var siteImage = options.data.root.site.image;
    var featuredImg = image ? image : siteImage;

    return new Handlebars.SafeString(featuredImg);
  },
  getThumb: function (thumb, options) {
    var siteThumb = options.data.root.site.thumb;
    var pageThumb = thumb ? thumb : siteThumb;

    return new Handlebars.SafeString(pageThumb);
  },
  setLibraries: function (libs, options) {
    var libraries = options.data.root.site.libraries;
    var scripts = '';

    libs.forEach(function (lib) {
      var script = '<script src="' + libraries[lib] + '"></script>';
      scripts = scripts + script;
    });

    return new Handlebars.SafeString(scripts);
  }
});

