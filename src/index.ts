import process from 'node:process'
import { getInput, setFailed } from '@actions/core'

import { uploadFile } from 'nitrodeploy/upload'

try {
  const token = process.env.NITRO_DEPLOY_TOKEN
  if (!token)
    throw new Error('NITRO_DEPLOY_TOKEN is not set. Please provide it as an environment variable.')

  const buildCommand = getInput('BUILD_COMMAND') || 'npm run build'
  const exportFolder = getInput('EXPORT_FOLDER') || '.output'
  const tag = getInput('TAG') || 'github'
  const type: 'nitro' | 'vitepress' = getInput('TYPE') as any || 'nitro'
  const autobuild = getInput('AUTO_BUILD') === 'true'

  await uploadFile({
    token,
    buildCommand,
    exportFolder,
    isBuild: autobuild,
    tag,
    type,
  })
}
catch (error: any) {
  setFailed(error.message)
}
