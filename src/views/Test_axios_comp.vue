

<template>
    <el-container>
        <el-header>
            <el-affix>
                <el-button type="primary" > Login </el-button>
            </el-affix>
        </el-header>
        <el-main>
            Welcome
        </el-main>
    </el-container>
</template>


<script setup>
import { inject } from "vue";
const $axios = inject('$axios');   // injecting in a component that wants it

$axios.get('http://13.66.157.148:8080/api/getUserInformation')
      .then((response) => {
        let res = JSON.stringify(response.data); // 先 變字串
        let resobj = JSON.parse(res) // 再變 object
        console.log(resobj)
      })
  
// $axios.get(...)

</script>