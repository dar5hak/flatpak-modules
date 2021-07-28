<script>
  import { filterModules, getModules } from "./lib/util.js";
  import FormatSelector from "./lib/FormatSelector.svelte";
  import ModuleInfo from "./lib/ModuleInfo.svelte";
  import Search from "./lib/Search.svelte";

  let format, query;
  let modules = [];
  let displayedModules = [];

  $: displayedModules = filterModules(modules, query);

  (async () => {
    modules = await getModules();
  })();
</script>

<main>
  <h1>Flatpak Module Declarations</h1>
  <section class="controls">
    <Search bind:query />
    <FormatSelector bind:selectedFormat={format} />
  </section>
  {#each displayedModules as module}
    <ModuleInfo {module} {format} />
  {/each}
</main>

<style>
  :root {
    font-family: "PT Sans", sans-serif;
  }

  main {
    color: #333;
    width: 100%;
    max-width: 45rem;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #f37329;
    font-size: 2rem;
    font-weight: normal;
    line-height: 1.1;
    margin: 2rem 0;
    max-width: 14rem;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
</style>
