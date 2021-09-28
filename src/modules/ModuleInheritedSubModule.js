import { SubModule } from './SubModule'

export class ModuleInheritedSubModule extends SubModule {
  print() {
    console.log('module-inherited-sub-module')

    super.print()
  }
}
