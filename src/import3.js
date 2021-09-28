async function run() {
  const ModuleInheritedSubModule = await import('./modules/ModuleInheritedSubModule.js');
  const moduleInheritedSubModule = new ModuleInheritedSubModule.ModuleInheritedSubModule()

  moduleInheritedSubModule.print()
}

run()
