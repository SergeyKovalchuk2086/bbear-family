<template>
  <div class="wrapper">
    <img class="bg" src="/bg/bg-orange.svg" alt="bg orange" />
    <img class="bear" src="/bear.png" alt="bear" />
    <div class="about">
      <h1>Animated Video Production</h1>
      <div class="about__content">
        <img src="/logo/we.svg" alt="we are" />
        <p>
          We walk the earth with опе drive: to таке impactfuI, visualIy
          striking, and audience-hooking animations. We nurture our passion for
          storytelling and distinctive designs by reinventing our creative hats
          and sharpening our motion chops. We're ап independent global,
          award-winning animation production сотрапу, passionate about оиг
          craft.
        </p>
        <div class="about__circle">
          <img class="circle" src="/logo/icons/circle.svg" alt="circle" />
          <img class="text" src="/logo/icons/circle-text.svg" alt="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  & > .bg {
    position: absolute;
    top: 323px;
    width: 100%;
  }

  & > .bear {
    position: absolute;
    right: 56px;
    top: -90px;
  }
}
.about {
  position: relative;
  margin: 90px 80px 0;

  & > h1 {
    color: #fff;
    font-size: 98px;
    font-style: normal;
    font-weight: 300;
    line-height: 80px;
    letter-spacing: 4.9px;
    text-transform: uppercase;
    max-width: 784px;
  }

  &__content {
    position: relative;
    z-index: 2;
    margin-top: 113px;

    & > p {
      max-width: 619px;
      color: var(--white);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 180%;
    }
  }

  &__circle {
    position: absolute;
    top: 34px;
    left: 700px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 219px;
    height: 219px;

    & > .text {
      position: absolute;
      top: 0;

      animation: rotate 10s linear infinite;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
