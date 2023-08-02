export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const result = await $fetch(`${config.backendUrl}/activity`);

  return {
    data: result,
  };
});
