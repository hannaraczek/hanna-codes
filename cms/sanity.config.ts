import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import client from './schemas/client'
import home from './schemas/home'
import project from './schemas/project'
import service from './schemas/service'

export default defineConfig({
  name: 'default',
  title: 'Hanna Codes',
  projectId: 'uh7kbf9e',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [home, client, project, service],
  },
})
