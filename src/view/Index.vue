<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="疫苗" name="first"><Vaccine/></el-tab-pane>
        <el-tab-pane label="体重" name="second">暂无数据</el-tab-pane>
        <el-tab-pane label="年龄" name="third">{{datedifference('2019-3-6',getNowFormatDate()) + '天'}}</el-tab-pane>
        <el-tab-pane label="体内外驱虫" name="fourth"><Quchong/></el-tab-pane>
        <el-tab-pane label="成长记录" name="fifth"></el-tab-pane>
    </el-tabs>
</template>
<script>
    import Quchong from '../components/Quchong'
    import Vaccine from '../components/Vaccine'
    export default {
        data() {
            return {
                activeName: 'first'
            };
        },
        components:{Vaccine,Quchong},
        methods: {
            // handleClick(tab, event) {
            //
            // },
            datedifference(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式
                var dateSpan,
                    tempDate,
                    iDays;
                sDate1 = Date.parse(sDate1);
                sDate2 = Date.parse(sDate2);
                dateSpan = sDate2 - sDate1;
                dateSpan = Math.abs(dateSpan);
                iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
                return iDays + 67
            },
            getNowFormatDate() {
                var date = new Date();
                var seperator1 = "-";
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var strDate = date.getDate();
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate;
                }
                var currentdate = year + seperator1 + month + seperator1 + strDate;
                return currentdate;
            }

        }
    };
</script>