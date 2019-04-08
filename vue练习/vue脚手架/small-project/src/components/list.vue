<template>
  <ul>
    <li>
      <router-link :to="{name:'helloworld',params:{worldmsg:'你你好世界'}}">helloworld</router-link>
    </li>
    <li>
      <router-link :to="{name:'helloearth',params:{earthmsg:'你好地球'}}">hellowearth</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "list"
};
</script>

<style>
</style>
