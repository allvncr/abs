<template>
  <div class="footer">
    <div class="container top">
      <div class="block">
        <h2>Nous contacter</h2>
        <ul>
          <li>
            Cel:
            <a href="tel:+2250707233418">(+225) 07 07 23 34 18</a>
          </li>
          <li>
            Email:
            <a href="mailto:infoabs@gmail.com">infoabs@gmail.com</a>
          </li>
        </ul>
      </div>
      <div class="block">
        <h2>Nos Liens</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">Instagram</a>
          </li>
          <li>
            <a href="http://x.com/" target="_blank">Twitter</a>
          </li>
        </ul>
      </div>
      <div class="block">
        <h2>Se connecter</h2>
        <ul>
          <li>
            <router-link to="">Se connecter</router-link>
          </li>
          <li>
            <router-link to="">S'inscription</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="mid">Numero agrement : ................</div>
    <div class="bottom">Tout droit reservé ABS © 2023</div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  .top {
    @media screen and (max-width: 749px) {
      flex-direction: column;
      text-align: center;
      padding: 32px 0;
    }
    padding: 64px 0;
    display: flex;
    justify-content: space-evenly;
    .block {
      padding: 0 24px;
      h2 {
        font-size: 20px;
        color: #254151;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      ul {
        list-style: none;

        li {
          font-size: 12px;
          margin-bottom: 8px;
          font-weight: 300;

          a {
            font-weight: 300;
            color: inherit;
            text-decoration: none;
          }
        }
      }
    }
  }

  .mid {
    background-color: #45b29d;
    padding: 18px 0;
    color: #254151;
    text-transform: uppercase;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
  }
  .bottom {
    background-color: #254151;
    padding: 8px 0;
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
}
</style>
