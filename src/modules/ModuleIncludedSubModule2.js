import { SubModule } from './SubModule'

export class ModuleIncludedSubModule2 {
  print() {
    const sub = new SubModule()
    sub.print()
  }
}
