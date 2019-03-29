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
                dataList:{
                    "list": [
                        {
                            "content": "第一次体内外驱虫",
                            "timestamp": "2019-3-18",
                            "color": "#409EFF"
                        },
                        {
                            "content": "下一次体内外驱虫",
                            "timestamp": "2019-4-18",
                            "color": "#409EFF"
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
