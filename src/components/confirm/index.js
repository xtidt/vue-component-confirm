
import Vue from 'vue';
import component from './main';

// todo 待删除

const Constructor = Vue.extend(component);

function Vconfirm(message) {
  const instance = new Constructor({
    data: {
      message,
    },
  });
  const vm = instance.$mount();
  document.body.appendChild(vm.$el);
  return instance;
}

export default Vconfirm;
