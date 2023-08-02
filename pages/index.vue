<template>
  <div class="grid h-screen place-items-center mx-5">
    <div>
      <h1
        class="sm:text-6xl text-4xl max-w-[708px] font-bold text-zinc-950 mb-10"
      >
        What is your next thing to do?
      </h1>
      <div class="w-full p-4 text-zinc-950 bg-white rounded-lg shadow">
        <div class="mb-2">
          <div class="h-3 text-3xl font-bold text-left text-zinc-950">“</div>
          <p class="px-4 text-md font-bold text-center text-zinc-950">
            {{ pending ? "Loading new ideas..." : data.data.activity }}
          </p>
          <div class="h-3 text-3xl font-bold text-right text-zinc-950">”</div>
        </div>
      </div>
      <button
        class="w-full px-4 py-2 bg-zinc-950 text-white rounded-lg mt-5 hover:bg-zinc-900"
        @click="refresh"
        :disabled="pending"
      >
        Explore new ideas
      </button>
    </div>
  </div>
</template>

<script setup>
const { data, error, pending, refresh } = await useFetch("/api/todo");
</script>
