import {Rule} from 'sanity'

export default {
  name: 'home',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'header',
      type: 'string',
      title: 'Header',
    },
    {
      name: 'subheader',
      type: 'text',
      title: 'Subheader',
    },
    {
      name: 'featuredClients',
      title: 'Featured Clients',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'client'}]}],
      validation: (rule: Rule) => rule.required().max(6),
    },
    {
      name: 'featuredLogos',
      title: 'Featured Logos',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'client'}]}],
      validation: (rule: Rule) => rule.max(6),
    },
    {
      name: 'services',
      title: 'Featured Services',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'service'}]}],
      validation: (rule: Rule) => rule.max(6),
    },
  ],
}
