const crypto = require('crypto');

module.exports = (opts = {}) => {
  const { hashLength = 6 } = opts;

  return {
    postcssPlugin: 'postcss-class-hash',
    Rule(rule) {
      if (rule.selector) {
        rule.selector = rule.selector
          .split(' ')
          .map((selector) => {
            if (selector.startsWith('.')) {
              const class = selector.slice(1);
              const hashedClassName = crypto
                .createHash('md5')
                .update(class)
                .digest('hex')
                .slice(0, hashLength);
              return `.${hashedClassName}`;
            }
            return selector;
          })
          .join(' ');
      }
    },
  };
};

module.exports.postcss = true;
