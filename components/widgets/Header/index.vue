<template>
  <div class="header">
    <img src="/logo/main-logo.svg" alt="main logo" />
    <div class="header__social">
      <a href=""
        ><img src="/logo/social-media/tg.svg" alt="telegramm logo"
      /></a>
      <a href=""
        ><img src="/logo/social-media/vk.svg" alt="vkontakte logo"
      /></a>
    </div>
    <p>
      portfolio <span><img src="/logo/icons/plus.svg" alt="plus icon" /></span>
    </p>
    <button class="header__menu">
      <span></span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 115px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--white);

  & > img {
    margin-right: 87px;
    cursor: pointer;
  }

  & > p {
    cursor: pointer;
    color: var(--white);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0 93px 0 auto;
  }

  &__social {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__menu {
    width: 47px;
    padding: 0;
    position: relative;
    z-index: 20;
    height: 22px;
  }

  &__menu span {
    display: block;
    height: 2px;
    background-color: #fff;
    position: relative;
  }

  &__menu span::before,
  &__menu span::after {
    content: "";
    width: 47px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    left: 0;
  }

  &__menu span::after {
    width: 23px;
    left: unset;
    right: 0;
  }

  &__menu span::before {
    top: -8px;
  }

  &__menu span::after {
    top: 8px;
  }
}
</style>
