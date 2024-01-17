<template>
  <div class="app-container">
    <div class="address-layout">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="out-border">
            <div class="layout-title">学习教程</div>
            <div class="color-main address-content">
              <!-- <a href="https://www.macrozheng.com" target="_blank">mall学习教程</a> -->
              <div>{{ sms.rTitle }}</div>
              <div>{{ test }}</div>
              <TestButton :messageFromParent="childRef" @childEvent="receiveDataFromChild"></TestButton>
              <el-button type="primary" @click="getSubject">确 定</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
            <div class="layout-title">视频教程</div>
            <div class="color-main address-content">
              <a href="https://www.macrozheng.com/mall/catalog/mall_video.html" target="_blank">mall视频教程（2023）</a>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="out-border">
            <div class="layout-title">点Star支持项目</div>
            <div class="color-main address-content">
              <a href="https://github.com/macrozheng/mall" target="_blank">mall项目</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-card class="mine-layout">
      <div style="text-align: center">
        <img width="150px" height="150px"
          src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg">
      </div>
      <div style="text-align: center">mall全套学习教程连载中！</div>
      <div style="text-align: center;margin-top: 5px"><span class="color-main">关注公号</span>，第一时间获取。</div>
    </el-card>


  </div>
</template>

<script setup>
// import {ElMessage} from 'element-plus'
// import { fetchList } from '@/api/brand'
import { onMounted, reactive, ref, watch } from "vue";
import TestButton from './TestButton'

const sms = reactive({
  rTitle: '1111111'
})

const childRef = ref('child');
const test = ref('3333')
const getSubject = async () => {
  // const res = await fetchList();
  console.log('res', sms)
  // ElMessage('this is a message.');
};

onMounted(() => {
  // getSubject();
  console.log('111111', sms)
});

watch(
  sms,
  (newV, oldV) => {
    console.log('asdasdasds', newV, oldV)
  },
  { immediate: true }
)

// 使用 ref 创建父组件的数据
const messageFromChild = ref('');

// 定义一个方法，用于接收子组件传递的数据
const receiveDataFromChild = (data) => {
  console.log('子组件传过来', data)
  messageFromChild.value = data;
};

</script>

<style scoped>
.app-container {
  /* width: 100%; */
  /* height: 100%; */
  margin-top: 40px;
  margin-left: 120px;
  margin-right: 120px; 
}

.address-layout {}

.total-layout {
  margin-top: 20px;
}

.total-frame {
  border: 1px solid #DCDFE6;
  padding: 20px;
  height: 100px;
}

.total-icon {
  color: #409EFF;
  width: 60px;
  height: 60px;
}

.total-title {
  position: relative;
  font-size: 16px;
  color: #909399;
  left: 70px;
  top: -50px;
}

.total-value {
  position: relative;
  font-size: 18px;
  color: #606266;
  left: 70px;
  top: -40px;
}

.un-handle-layout {
  margin-top: 20px;
  border: 1px solid #DCDFE6;
}

.layout-title {
  color: #606266;
  padding: 15px 20px;
  background: #F2F6FC;
  font-weight: bold;
}

.un-handle-content {
  padding: 20px 40px;
}

.un-handle-item {
  border-bottom: 1px solid #EBEEF5;
  padding: 10px;
}

.overview-layout {
  margin-top: 20px;
}

.overview-item-value {
  font-size: 24px;
  text-align: center;
}

.overview-item-title {
  margin-top: 10px;
  text-align: center;
}

.out-border {
  border: 1px solid #DCDFE6;
}

.statistics-layout {
  margin-top: 20px;
  border: 1px solid #DCDFE6;
}

.mine-layout {
  position: absolute;
  right: 140px;
  top: 107px;
  width: 250px;
  height: 235px;
}

.address-content {
  padding: 20px;
  font-size: 18px
}
</style>
