<template>
    <div id="loginPage">
        <div id="formbox">
            <el-row>
                <el-col :span="18" >
                    <div class="grid-content bg-purple">
                        <el-form :label-position="labelPosition"  label-width="80px" :model="formLabelAlign">
                            <el-form-item label="账号">
                                <el-input v-model="formLabelAlign.name"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="formLabelAlign.region"></el-input>
                            </el-form-item>
                            <el-form-item label="">
                                <el-button type="primary">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
        
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    mounted: function () {
        const page = document.getElementById('loginPage');
        page.addEventListener('contextmenu', (node) => {
            const x = node.clientX;
            const y = node.clientY;
            let dom = document.createElement('div');
            dom.innerText = '嘤';
            dom.className = 'text';
            dom.setAttribute('style', `position:fixed;top:${y}px;left:${x-7}px;height:16px;`);
            dom.setAttribute('class', 'text');
            page.appendChild(dom);
            setTimeout( () => page.removeChild(dom), 1500 )
        });
    },
    name: 'loginPage',
    data: function () {
        return {
            num: 1,
            labelPosition: 'left',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
    methods: {
    }
})
</script>
<style scoped>
    #loginPage {
        background:
            radial-gradient(
                ellipse at top left,
                rgba(255, 255, 255, 1) 40%,
                rgba(229, 229, 229, .9) 100%
            );
        height: 100vh;
        position: relative;
    }
    #formbox{
        /* border: 1px solid #f00; */
        padding: 2vw;
        width:45%;
        height: 20vw;
        position:absolute;
        right: 0;left: 0;
        top:0;bottom: 0;
        margin: auto;
    }
</style>


