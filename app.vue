<template>
  <div>
    <NuxtLayout>
      <div class="my-28 md:my-40 lg:my-60 px-2">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>