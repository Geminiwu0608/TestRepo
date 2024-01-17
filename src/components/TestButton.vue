<template>
    <div>
      <el-button type="primary" @click="sendDataToParent"> {{ name.messageFromParent }}</el-button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits,onMounted } from 'vue'
import { ElButton} from 'element-plus'

const name = defineProps(['messageFromParent']);

onMounted(() => {
  
  console.log('name', name);
});

// 使用 defineEmits 定义事件
const emits = defineEmits(['childEvent']);

// 定义一个方法，触发事件并传递数据
const sendDataToParent = () => {
  emits('childEvent', 'Hello from child!');
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
