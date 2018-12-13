<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <dialogConfirm 
      :show-dialog="showDialog" 
      :ok-text="'删除'" 
      :cancel-text="'取消'" 
      :content="'content'" 
      v-on:confirm="confirmFn" 
      v-on:cancel="cancelFn" 
      :hide-confirm="false">
    </dialogConfirm>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import dialogConfirm from './components/confirm/main'

export default {
  name: 'App',
  data: () => ({
    showDialog: true
  }),
  methods: {
    confirmFn() {
      alert('confirm')
    },

    cancelFn() {
      alert('cancel')
    }
  },
  components: {
    HelloWorld,
    dialogConfirm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
