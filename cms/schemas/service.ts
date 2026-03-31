import {Rule} from 'sanity'

export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Service Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
  ],
}
