//import {SubModule} from './modules/SubModule'
async function run() {
  const ModuleIncludedSubModule = await import('./modules/ModuleIncludedSubModule.js')
  const moduleIncludedSubModule = new ModuleIncludedSubModule.ModuleIncludedSubModule()

  const ModuleIncludedSubModule2 = await import('./modules/ModuleIncludedSubModule2.js')
  const moduleIncludedSubModule2 = new ModuleIncludedSubModule2.ModuleIncludedSubModule()

  moduleIncludedSubModule.print()
}

run()
