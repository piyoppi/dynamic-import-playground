import { SubModule } from './SubModule'

export class ModuleIncludedSubModule {
  print() {
    const sub = new SubModule()
    sub.print()
  }
}
