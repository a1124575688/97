<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in dataList.list"
        :key="index"
        :color="activity.color"
        :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activities2: [
          {
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46'
        }],
        dataList:{
          "list": [
            {
              "content": "妙三多三联苗",
              "timestamp": "2019-3-20",
              "color": "#0bbd87"
            },
            {
              "content": "下一次疫苗时间(狂犬疫苗)",
              "timestamp": "2019-3-31",
              "color": "#0bbd87"
            }
          ]
        }

      };
    },
    methods:{

    },
    created() {

    },
    mounted() {
      // console.log(this.dataList)
    }
  };
</script>

<style lang="scss">

</style>
