<template>
  <footer class="footer">
    <div class="container-fluid">
      <!-- <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="#"> Link </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Link </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Link </a>
        </li>
      </ul> -->
      <div class="copyright">
        © {{ year }} made with <i class="tim-icons icon-heart-2"></i> by
        <a href="https://www.linkedin.com/in/diogoalvesandrade/" target="_blank" rel="noopener">Diogo Andrade</a> for studies.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
