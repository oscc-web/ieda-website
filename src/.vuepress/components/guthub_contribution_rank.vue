<template>
    <div class="vue-contribution">
        <svg :width="mW" :height="mH">
            <text :style="{fontSize: fontSize + 'px'}" :fill="fontColor" :x="textX(i)" :y="textY(i)" v-for="(m, i) in month">{{m}}</text>
            <g v-for="(val, key, index) in mdata">
                <rect
                    :width="rectWidth"
                    :height="rectHeight"
                    :fill="fill(val)"
                    :x="rectX(index)"
                    :y="rectY(index)"
                    @click="click(key)"
                    @mouseenter="mouseenter($event,key,val)"
                    @mouseleave="mouseleave"
                >
                </rect>
            </g>
        </svg>
        <div ref="tipText" v-if="tipText" :style="{left:tipX,top:tipY}" class="svg-tip"><i></i><div v-html="tipText"></div></div>
    </div>
</template>

<script>
export default {
    name: "contribution",
    data() {
        return {
            tipText: null,
            tipX: null,
            tipY: null
        }
    },
    props: {
        conditions: {
            type: Array,
            default: ()=> {
                return [
                    {'condition':'<','value':1,'color':'#ebedf0'},
                    {'condition':'<','value':3,'color':'#c6e48b'},
                    {'condition':'<','value':5,'color':'#7bc96f'},
                    {'condition':'<','value':7,'color':'#239a3b'},
                    {'condition':'>=','value':7,'color':'#196127'},
                ]
            }
        },
        data: {
            type: Object
        },
        year: {
            type: Number,
            default: ()=> {
                const date = new Date;
                return date.getFullYear();
            }
        },
        fontSize: {
            type: Number,
            default: ()=> {
                return 10
            }
        },
        spacing: {
            type: Number,
            default: ()=> {
                return 2
            }
        },
        rectWidth: {
            type: Number,
            default: ()=> {
                return 12
            }
        },
        rectHeight: {
            type: Number,
            default: ()=> {
                return 12
            }
        },
        fontColor: {
            type: String,
            default: ()=> {
                return '#767676'
            }
        },
        monthText: {
            type: [String, Array],
            default: ()=>{
                return 'zh-cn';
            }
        },
        click: {
            type: Function,
            default: () => ({})
        }
    },
    created() {
        
    },
    computed: {
        mW: function(){
            return (this.rectWidth + this.spacing)*53;
        },
        mH: function(){
            return (this.rectHeight + this.spacing)*7+20;
        },
        month: function() {
            if(this.monthText == 'zh-cn'){
                return ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
            }else if(this.monthText == 'en'){
                return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            }else{
                return this.monthText;
            }
        },
        mdata: function(){
            const date = {};
            const isLeap = (0===this.year%4) && (0!==this.year%100) || (0===this.year%400);
            // 如果为闰年，则2月有29日
            const month2 = isLeap?29:28;
            for (var i = 1; i <= 12; i++) {
                const d = i == 2?month2:i == 4 || i == 6 || i == 9 || i == 11?30:31;
                for (var j = 1; j <= d; j++) {
                    const k = this.year+'-'+i+'-'+j;
                    date[k] = 0;
                }
            }
            const newObj = Object.assign(date,this.data);
            return newObj;
        }
    },
    methods: {
    	mouseenter(e,key,val){
            const t = val>0?val:'No';
            this.tipText = t+' contributions on <span style="color:#aaa">'+key+'</span>';
            this.$nextTick(function () {
                const w = Number(this.$refs.tipText.offsetWidth);
                const h = Number(this.$refs.tipText.offsetHeight);
                
                const x = Number(e.path[0].attributes.x.value);
                const y = Number(e.path[0].attributes.y.value);
                this.tipX = (x-((w-this.rectWidth)/2)-3)+'px';
                this.tipY = (y-h-6)+'px';
            })
    	},
        mouseleave(){
            this.tipText = null;
        },
        fill(v){
            for (let i in this.conditions) {
                if(this.conditions[i].condition == '>'){
                    if(v > this.conditions[i].value){
                        return this.conditions[i].color;
                    }
                }else if(this.conditions[i].condition == '<'){
                    if(v < this.conditions[i].value){
                        return this.conditions[i].color;
                    }
                }else if(this.conditions[i].condition == '=='){
                    if(v == this.conditions[i].value){
                        return this.conditions[i].color;
                    }
                }else if(this.conditions[i].condition == '!='){
                    if(v != this.conditions[i].value){
                        return this.conditions[i].color;
                    }
                }else if(this.conditions[i].condition == '>='){
                    if(v >= this.conditions[i].value){
                        return this.conditions[i].color;
                    }
                }else if(this.conditions[i].condition == '<='){
                    if(v <= this.conditions[i].value){
                        return this.conditions[i].color;
                    }
                }
            }
        },
        rectX(index){
            const i = parseInt(index/7);
            return i * (this.rectWidth + this.spacing);
        },
        rectY(index){
            const i = index%7;
            return i * (this.rectHeight + this.spacing) + 20;
        },
        textX(index){
            const d = this.dateDiff(this.year+'-1-1', this.year+'-'+(index+1)+'-1');
            const col = Math.ceil(d/7);
            return (col * this.rectWidth) + (col * this.spacing);
        },
        textY(index){
            return 10;
        },
        //计算两个日期天数差
        dateDiff(sDate1, sDate2){
            if(sDate1 == sDate2){
                return 0;
            }
            if(!sDate1){
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var day = date.getDate();
                sDate1 = year+"-"+month+"-"+day;
            }
            var  aDate,  oDate1,  oDate2,  iDays ; 
            aDate  =  sDate1.split("-") ; 
            oDate1  =  new Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);
            aDate  =  sDate2.split("-");  
            oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0]);  
            iDays  =  parseInt(Math.abs(oDate1  -  oDate2)/1000/60/60/24);  
            return  iDays;  
        }

    }
}
</script>

<style scoped>
    rect {
        cursor: pointer;
    }
    .vue-contribution{
        position: relative;
    }
    .svg-tip{
        position: absolute;
        padding: 5px 10px;
        background-color: #000;
        border-radius: 2px;
        color: #fff;
        font-size: 12px;
        z-index: 9999;
    }
    .svg-tip i{
        position: absolute;
        width:0;
        height:0;
        border-right:6px solid transparent;
        border-left:6px solid transparent;
        border-top:6px solid #000;
        left: 50%;
        bottom: -6px;
        margin-left: -3px;
    }
</style>
