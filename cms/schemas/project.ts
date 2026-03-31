import {Rule} from 'sanity'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Clients',
      type: 'reference',
      to: [{type: 'client'}],
    },
    {
      name: 'service',
      title: 'Service Type',
      type: 'reference',
      to: [{type: 'service'}],
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
