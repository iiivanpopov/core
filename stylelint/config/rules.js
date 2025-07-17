export const orderRules = [
  // Variables and Custom Properties
  'custom-properties',
  'dollar-variables',
  'at-variables',

  // Sass-specific Directives (Definitions)
  {
    type: 'at-rule',
    name: 'mixin',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'function',
    hasBlock: true,
  },

  // Sass-specific Directives (Usage)
  {
    type: 'at-rule',
    name: 'include',
    hasBlock: false,
  },
  {
    type: 'at-rule',
    name: 'extend',
    hasBlock: false,
  },

  // Sass-specific Control Directives
  {
    type: 'at-rule',
    name: 'if',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'for',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'each',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'while',
    hasBlock: true,
  },

  // CSS At-rules (Global Definitions)
  {
    type: 'at-rule',
    name: 'font-face',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'font-feature-values',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'counter-style',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'property',
    hasBlock: true,
  },

  // CSS At-rules (Queries and Layers)
  {
    type: 'at-rule',
    name: 'supports',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'container',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'layer',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'media',
    hasBlock: true,
  },

  // CSS At-rules (Animations and Page)
  {
    type: 'at-rule',
    name: 'keyframes',
    hasBlock: true,
  },
  {
    type: 'at-rule',
    name: 'page',
    hasBlock: true,
  },

  // CSS Declarations and Rules
  'declarations',
  'rules',
]
