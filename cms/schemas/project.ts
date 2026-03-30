import { Rule } from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{type: 'client'}],
    },
    {
      name: 'fullName',
      title: 'Project Full Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'shortName',
      title: 'Project Short Name (for navigation, if needed)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 96,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'Type 1', value: 'type1'},
          {title: 'Type 2', value: 'type2'},
          {title: 'Type 3', value: 'type3'},
          {title: 'Type 4', value: 'type4'},
        ],
        layout: 'dropdown',
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      description: 'A short description of the project',
    },
    {
      name: 'video',
      title: 'Final Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload the final delivered video',
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Upload a set of images for this project',
    },
  ],
}
