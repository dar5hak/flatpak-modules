<script>
  export let query = null;
</script>

<section class="search-container">
  <label for="search" class="label">Search:</label>
  <input
    type="text"
    placeholder="gtksourceview"
    class="search"
    id="search"
    bind:value={query}
  />
</section>

<style>
  .search-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    width: 100%;
  }

  .label {
    font-size: 0.8rem;
  }

  .search {
    font-size: 0.8rem;
    margin: 0;
    padding: 0.4rem 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    color: #333;
  }
</style>
