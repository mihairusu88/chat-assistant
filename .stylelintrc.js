module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': [
      'stylelint-scss',
      'stylelint-order'
  ],
  'files': [
      '**/*.css',
      '**/*.scss'
  ],
  'rules': {
    'at-rule-no-unknown': null,
      'color-hex-case': 'upper',
      'color-hex-length': 'long',
      'function-parentheses-space-inside': 'always',
      'indentation': [
          4,
          {
              'message': 'Please use 4 spaces for indentation.'
          }
      ],
      'no-descending-specificity': null,
      'no-empty-source': null,
      'no-missing-end-of-source-newline': null,
      'no-eol-whitespace': [
          true,
          {
              'ignore': [
                  'empty-lines'
              ]
          }
      ],
      'selector-pseudo-element-no-unknown': [
          true,
          {
              'ignorePseudoElements': [
                  ':export',
                  'v-deep',
                  ':deep',
              ]
          }
      ],
      'selector-pseudo-class-no-unknown': [
          true,
          {
              'ignorePseudoClasses': [
                  'export',
                  'deep'
              ]
          }
      ],
      'property-case': null,
      'property-no-unknown': [
          true,
          {
              'ignoreSelectors': [
                  ':export'
              ]
          }
      ],
      'order/order': [
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'heading',
              'hasBlock': false
          },
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'font-size',
              'hasBlock': false
          },
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'font-weight',
              'hasBlock': false
          },
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'theme-color',
              'hasBlock': false
          },
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'border-radius',
              'hasBlock': false
          },
          'declarations',
          'custom-properties',
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'mobile-only',
              'hasBlock': true
          },
          {
              'type': 'at-rule',
              'name': 'include',
              'parameter': 'mobile-xs-only',
              'hasBlock': true
          },
          {
              'type': 'at-rule',
              'name': 'media',
              'hasBlock': true
          }
      ],
      'order/properties-order': [
          [
              {
                  'emptyLineBefore': 'never',
                  'properties': [
                      'display',
                      'position',
                      'top',
                      'left',
                      'right',
                      'bottom'
                  ]
              },
              {
                  'emptyLineBefore': 'never',
                  'properties': [
                      'height',
                      'width',
                      'line-height'
                  ]
              },
              {
                  'emptyLineBefore': 'never',
                  'properties': [
                      'padding',
                      'padding-top',
                      'padding-right',
                      'padding-bottom',
                      'padding-left',
                      'border',
                      'margin',
                      'margin-top',
                      'margin-right',
                      'margin-bottom',
                      'margin-right'
                  ]
              },
              {
                  'emptyLineBefore': 'never',
                  'properties': [
                      'background',
                      'background-color'
                  ]
              },
              {
                  'emptyLineBefore': 'never',
                  'properties': [
                      'color',
                      'font-size',
                      'font-weight',
                      'font-family',
                      'letter-spacing'
                  ]
              }
          ],
          {
              'unspecified': 'bottom',
              'emptyLineBeforeUnspecified': 'never',
              'emptyLineMinimumPropertyThreshold': 4
          }
      ],
      'scss/at-rule-no-unknown': true,
      'scss/selector-no-union-class-name': true,
      'unit-allowed-list': [
          [
              'px',
              'em',
              'rem',
              'vh',
              'vw',
              'wh',
              '%'
          ],
          {
              'ignoreProperties': {
                  'ms': [
                      'transition',
                      '/animation/'
                  ],
                  's': [
                      '/transition/',
                      'transform',
                      '/animation/'
                  ],
                  'deg': [
                      '/transition/',
                      'transform',
                      '/$/'
                  ],
                  'grad': [
                      '/$/'
                  ],
                  'turn': [
                      '/$/'
                  ],
                  'rad': [
                      '/$/'
                  ]
              }
          }
      ],
      'shorthand-property-no-redundant-values': true
  }
};