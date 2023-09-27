<template>
  <div class="social">
    <ul>
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <span class="pi pi-facebook"></span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <span class="pi pi-instagram"></span>
        </a>
      </li>
      <li>
        <a href="http://x.com/" target="_blank">
          <span class="pi pi-twitter"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.social {
  @media screen and (max-width: 989px) {
    width: 48px;
    height: 150px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
  padding: 8px;
  background-color: #f4ce50;
  position: fixed;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  height: 200px;
  width: 72px;
  z-index: 1;

  ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;

    span {
      @media screen and (max-width: 989px) {
        font-size: 20px;
      }
      font-size: 24px;
      color: #2f2f2e;
    }
  }
}
</style>
