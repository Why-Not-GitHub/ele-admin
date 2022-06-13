import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import { MockMethod } from 'vite-plugin-mock'

// @ts-ignore
const modules = import.meta.globEager('../mock/*.ts')
const mockModules: MockMethod[] = []

Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
