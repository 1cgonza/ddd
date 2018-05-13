import metadata from '../config';
import stripTags from 'striptags';

module.exports = (description, excerpt) => {
  let pageDescription = description ? description : metadata.siteDescription;

  if (!description && excerpt.length > 0) {
    pageDescription = excerpt;
  }

  return stripTags(pageDescription);
};
