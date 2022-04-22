<template>
  <header>
    <form>
      <label>
        <span class="material-icons">work_outline</span>
        <input placeholder="Title, companies, expertise or benefits" />
      </label>
      <button>Search</button>
    </form>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
header {
  margin-top: 3.2rem;
  margin-bottom: 5.4rem;
  padding: 4.2rem 0;
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: center;
  border-radius: calc(2 * $radius);
  @include center;

  form {
    display: flex;
    @include card;
    padding-block: 0.4rem;
    padding-left: 1.75rem;
    padding-right: 0.4rem;
    min-width: fit-content;
    width: 60vw;

    span {
      font-size: 1.5rem;
      margin-right: 0.95rem;
      color: $gray-2;
    }

    label {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 1.4rem 0;

      input {
        flex: 1;
        font-size: 1.2rem;
        background: none;
        outline: 0;
        border: 0;

        &::placeholder {
          color: $gray-2;
        }
      }
    }

    button {
      margin-left: 1rem;
      outline: 0;
      border: 0;
      padding: 1.4rem 4.8rem;
      border-radius: $radius;
      background: $blue;
      color: white;
      opacity: 0.8;

      &:hover {
        cursor: pointer;
        opacity: 1;
      }
    }

    /* Form Media Queries */
    @include screen(386px) {
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 1rem;
      padding-right: 1.75rem;
      row-gap: 1rem;
      flex-basis: 90%;

      label {
        padding: 1rem 0;
        align-self: stretch;
        border-bottom: 0.1rem solid #eee;
      }

      button {
        align-self: center;
      }
    }
  }
}
</style>
