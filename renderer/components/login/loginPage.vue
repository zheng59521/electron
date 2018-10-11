<template>
    <div id="loginPage">
        I am login page num is{{num}}
        <router-link to="/">返回上级</router-link>
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
            dom.innerText = '1';
            dom.className = 'text';
            dom.setAttribute('style', `position:absolute;top:${y}px;left:${x-7}px;`);
            dom.setAttribute('class', 'text');
            page.appendChild(dom);
        });
    },
    name: 'loginPage',
    data: function () {
        return {
            num: 1,
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
    }
</style>


