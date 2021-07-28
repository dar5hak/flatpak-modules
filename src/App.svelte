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
  {#each displayedModules as module (module.name)}
    <ModuleInfo {module} {format} />
  {:else}
    <section class="no-results">
      <h2>No results</h2>
      <p>
        Cannot find what you are looking for?
        <a
          href="https://github.com/dar5hak/flatpak-modules/issues/new"
          target="_blank"
          rel="noreferrer">Suggest an addition.</a>
      </p>
    </section>
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

  a {
    color: #f37329;
  }

  a:visited {
    color: #cc3b02;
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

  .no-results {
    text-align: center;
    margin: 4rem;
  }
</style>
