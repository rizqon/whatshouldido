<template>
  <div class="">
    <header
      class="flex justify-between items-center w-full mt-5 border-b-2 border-zinc-950 pb-7 sm:px-4 px-2"
    >
      <NuxtLink class="flex space-x-3" href="/">
        <h1
          class="sm:text-4xl text-zinc-950 text-2xl font-bold ml-2 tracking-tight bg-"
        >
          whatshouldido
        </h1></NuxtLink
      >
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-slate-100",
  },
});
</script>
