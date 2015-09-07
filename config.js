var environments = {
  dev: {
    baseUrl: 'http://localhost:3000/',
    videosPath: 'http://localhost:3000/videos/',
    env: 'dev'
  },
  prod: {
    baseUrl: 'http://www.dddrawings.com/',
    videosPath: 'http://juancgonzalez.com/lab/videos/',
    env: 'prod'
  },
  deploy: {
    baseUrl: 'http://www.dddrawings.com/',
    videosPath: 'http://juancgonzalez.com/lab/videos/',
    env: 'deploy'
  },
  clean: {
    env: 'clean'
  }
};

var defaults = {
  siteTitle: 'Data Driven Drawings',
  siteSubtitle: 'An Approach to Autobiographical Animation',
  author: 'Juan Camilo González',
  email: 'info@juancgonzalez.com',
  siteDescription: 'PhD dissertation.',
  twitter: '@1cgonza',
  github: '1cgonza',
  googlePlus: 'https://plus.google.com/+JuanCamiloGonz%C3%A1lezJ/posts',
  defaultImage: 'https://farm9.staticflickr.com/8592/16218761572_6100bf03d9_o.jpg',
  defaultThumb: 'https://farm9.staticflickr.com/8592/16218761572_016c2e0f3c.jpg',
  defaultNoImg: 'https://farm3.staticflickr.com/2950/15297536047_e9da6fd148.jpg',
  extLibraries: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min',
    jqueryui: '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min',
    d3: 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min'
  }
};

function attachOptionsToDefaults (options) {
  for (var option in options) {
    defaults[option] = options[option];
  }
  return defaults;
}

var defineEnvironment = function (args) {
  var env = attachOptionsToDefaults(environments.dev);

  args.forEach(function (val) {
    if (val === '--prod') {
      env = attachOptionsToDefaults(environments.prod);
    }
    else if (val === '--deploy') {
      env = attachOptionsToDefaults(environments.deploy);
    }
    else if (val === '--clean') {
      env = environments.clean;
    }
  });

  return env;
};

module.exports = defineEnvironment;