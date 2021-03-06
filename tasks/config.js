let environments = {
  dev: {
    baseUrl: '/',
    videosPath: '/videos/',
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

let defaults = {
  siteTitle: 'Data Driven Drawings',
  siteSubtitle: 'An Approach to Autobiographical Animation',
  author: 'Juan Camilo González',
  email: 'info@juancgonzalez.com',
  siteDescription: 'PhD dissertation.',
  twitter: '@1cgonza',
  github: '1cgonza',
  googlePlus: 'https://plus.google.com/+JuanCamiloGonz%C3%A1lezJ/posts',
  defaultImgPath: '/lab/perlin-violence-map',
  extLibraries: {
    jquery: 'jquery-2.1.4.min',
    jqueryUi: 'jquery-ui-1.11.4.min',
    d3: 'd3-3.5.6.min',
    momentTimezone: 'moment'
  }
};

function attachOptionsToDefaults(options) {
  for (let option in options) {
    defaults[option] = options[option];
  }
  return defaults;
}

function defineEnvironment() {
  let env = attachOptionsToDefaults(environments.dev);

  process.argv.forEach(val => {
    if (val === '--prod') {
      env = attachOptionsToDefaults(environments.prod);
    } else if (val === '--deploy') {
      env = attachOptionsToDefaults(environments.deploy);
    } else if (val === '--clean') {
      env = environments.clean;
    }
  });

  return env;
}

export default defineEnvironment();
