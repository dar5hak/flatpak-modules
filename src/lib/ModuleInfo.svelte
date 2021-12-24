<script>
  import hljs from "highlight.js";
  import hljsSvelte from "highlightjs-svelte";
  import { dump } from "js-yaml";
  import { Format } from "./constants";

  hljsSvelte(hljs);

  export let module;
  export let format;

  let selectedVersion = module?.data[0];
  $: dataToDisplay = {
    ["finish-args"]: selectedVersion["finish-args"],
    module: selectedVersion.module,
  };
</script>

<section>
  <h2 class="module-name">{module.name}</h2>

  {#each module.data as version}
    {#if selectedVersion === version}
      <button disabled class="selected version">{version.version}</button>
    {:else}
      <button
        class="version"
        on:click={() => {
          selectedVersion = version;
        }}>
        {version.version}
      </button>
    {/if}
  {/each}

  {#if format === Format.YAML}
    <pre>
      <code class="language-yaml">
        {@html hljs.highlight('yaml', dump(dataToDisplay, { lineWidth: 120 })).value}
      </code>
    </pre>
  {:else if format === Format.JSON}
    <pre>
      <code class="language-json">
        {@html hljs.highlight('json', JSON.stringify(dataToDisplay, null, 2)).value}
      </code>
    </pre>
  {/if}
</section>

<style>
  .module-name {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  .version {
    color: #4d4d4d;
    font-size: 1rem;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 0.25rem 0.5rem;
    margin: 0;
    cursor: pointer;
  }

  .version.selected {
    border-color: #a62100;
    color: #333;
    background-color: #ffc27d66;
  }

  pre {
    margin: 0.5rem 0;
    padding: 0.8rem;
    border: 1px solid #f37329;
    border-radius: 0.25rem;
    overflow-x: auto;
    max-width: 100%;
  }

  code {
    font-family: "Inconsolata", monospace;
    overflow-x: auto;
  }
</style>
