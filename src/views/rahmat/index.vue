
<template>
  <div class="tab-container">
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success"/>
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key="item.key" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
    <p>{{ testmethod() }}</p>
  </div>
</template>
<script>
/* eslint-disable */

import tabPane from './components/tabPane'
import { fetchDetails } from '@/api/details'

export default {
  name: 'Tab',
  components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: 'China', key: 'CN' },
        { label: 'USA', key: 'US' },
        { label: 'Japan', key: 'JP' },
        { label: 'Eurozone', key: 'EU' }
      ],
      activeName: 'CN',
      createdTimes: 0,
      list: null,
      listLoading: true
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
      console.log("k3dnf")
    },
    // fetchData() {
    //   this.listLoading = true
    //   fetchDetails().then(response => {
    //     this.list = response.data.items
    //     this.listLoading = false
    //   }).then(responsed => { console.log(this.list) })
    // },
    testmethod() {
      fetchDetails().then(result => {console.log(result.data)})
      }
    }
  }
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
