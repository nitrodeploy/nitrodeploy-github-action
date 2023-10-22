import { getInput } from '@actions/core'

import { uploadFile } from 'nitrodeploy/upload'

const token = getInput('TOKEN')
const buildCommand = getInput('BUILD_COMMAND')
const exportFolder = getInput('EXPORT_FOLDER')
const tag = getInput('TAG')
const autobuild = getInput('AUTO_BUILD')

await uploadFile({
  token,
  buildCommand: buildCommand || 'npm run build',
  exportFolder: exportFolder || '.output',
  isBuild: autobuild === 'true',
  tag: tag || 'github',
})
