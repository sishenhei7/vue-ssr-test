<template>
  <div>{{ item.title }}</div>
</template>

<script>
export default {
  syncData({ store, route }) {
    return store.dispatch('fetchItem', route.params.id);
  },
  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    }
  }
}
</script>
