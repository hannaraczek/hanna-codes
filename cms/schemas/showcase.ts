export default {
  name: 'showcase',
  type: 'document',
  title: 'Showcase Client',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Client Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Project Description',
    },
    {
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL (YouTube, Vimeo, etc.)',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery Images',
      of: [{type: 'image'}],
    },
  ],
}
