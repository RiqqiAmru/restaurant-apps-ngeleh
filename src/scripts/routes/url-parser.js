const UrlParser = {
  parseActiveUrl(combiner=true) {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    if (combiner) {
      return this._urlCombiner(splitedUrl);
    }
    return splitedUrl;
  },

  // return object
  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  // return string url
  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
      (splitedUrl.id ? '/:id' : '') +
      (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;
