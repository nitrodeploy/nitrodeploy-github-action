import { getInput } from '@actions/core'

import { uploadFile } from 'nitro-deploy/upload'

const token = getInput('nitro_deploy_token')
const buildCommand = getInput('nitro_deploy_build_command')
const exportFolder = getInput('nitro_deploy_export_folder')

await uploadFile({
  token,
  buildCommand: buildCommand || 'npm run build',
  exportFolder: exportFolder || '.output',
})
