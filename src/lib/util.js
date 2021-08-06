export async function getModules() {
  return (await fetch('/modules.json')).json();
}

export function filterModules(modules, query) {
  return query
    ? modules.filter((module) =>
      module.name.toLowerCase().includes(query.toLowerCase()) ||
      module.tags.some(tag => tag.includes(query.toLowerCase()))
    )
    : modules;
}