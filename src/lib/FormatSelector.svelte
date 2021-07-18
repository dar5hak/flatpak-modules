<script>
  import { Format } from "./constants";

  let formats = Object.values(Format);
  export let selectedFormat = Format.YAML;
</script>

<section class="formats-container">
  <span class="label">Format:</span>
  <div class="formats">
    {#each formats as format}
      <button
        class="format"
        class:selected={format === selectedFormat}
        on:click={() => {
          selectedFormat = format;
        }}
      >
        {format}
      </button>
    {/each}
  </div>
</section>

<style>
  .formats-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .label {
    font-size: 0.8rem;
  }

  .formats {
    display: flex;
  }

  .format {
    font-size: 0.8rem;
    margin: 0;
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0;
    color: #333;
    background: linear-gradient(
      to bottom,
      transparent,
      transparent 50%,
      rgba(0, 0, 0, 0.04)
    );
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.45),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.15),
      0 1px 0 0 rgba(255, 255, 255, 0.15);
    outline: none;
  }

  .format.selected {
    background: rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05),
      0 1px 0 0 rgba(255, 255, 255, 0.3);
  }

  .format:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right: none;
  }

  .format:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
</style>
