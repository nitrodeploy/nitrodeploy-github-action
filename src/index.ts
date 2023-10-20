import { getInput } from '@actions/core'

const nameToGreet = getInput('nitro_deploy_token')

console.warn(`Hello ${nameToGreet}!`)
