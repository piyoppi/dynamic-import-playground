async function run() {
  const MainModule = await import('./modules/MainModule.js');
  const ModuleIncludedSubModule = await import('./modules/ModuleIncludedSubModule.js');
  const ModuleInheritedSubModule = await import('./modules/ModuleInheritedSubModule.js');

  const mainModule = new MainModule.MainModule()
  const moduleIncludedSubModule = new ModuleIncludedSubModule.ModuleIncludedSubModule()
  const moduleInheritedSubModule = new ModuleInheritedSubModule.ModuleInheritedSubModule()

  mainModule.print()
  moduleIncludedSubModule.print()
  moduleInheritedSubModule.print()
}

run()
