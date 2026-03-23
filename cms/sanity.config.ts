import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import showcase from './schemas/showcase'

export default defineConfig({
  name: 'default',
  title: 'Hanna Codes',
  projectId: 'uh7kbf9e',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [showcase],
  },
})
