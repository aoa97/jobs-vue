<template>
  <div class="sidebar">
    <!-- Checkbox -->
    <label class="time"><input type="checkbox" />Full time</label>

    <div class="location">
      <!-- Heading -->
      <h3 class="heading">Location</h3>

      <!-- Search Bar -->
      <form>
        <span class="ico material-icons">public</span>
        <input placeholder="Title, companies, expertise or benefits" />
      </form>

      <!-- Radio Buttons -->
      <div class="cities">
        <label><input type="radio" />London</label>
        <label><input type="radio" />Amsterdam</label>
        <label><input type="radio" />New York</label>
        <label><input type="radio" />Berlin</label>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.sidebar {
  flex-basis: 35%;
  display: flex;
  flex-direction: column;

  /* Checkbox & Below Radio Buttons Labels */
  label {
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: $poppins;
    color: $d-blue;
  }

  /*  Location searcy & countries */
  .location {
    margin-block: 3rem 2.45rem;

    /* Search bar */
    form {
      @include card;
      margin-block: 1.4rem 2.45rem;
      padding: 1.7rem 1.4rem;

      input {
        flex-basis: 100%;
        font-size: 1.2rem;
        background: none;
        outline: 0;
        border: 0;

        &::placeholder {
          color: $gray-2;
        }
      }
    }

    /* Radio Buttons */
    .cities {
      display: flex;
      flex-direction: column;
      row-gap: 1.567rem;
    }
  }
}
</style>
