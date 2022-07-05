

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

<script>
export default{
  inject: ['$axios'],
  created(){
    this.$axios.get('http://13.66.157.148:8080/api/getUserInformation')
      .then((response) => {
        let res = JSON.stringify(response.data); // 先 變字串
        let resobj = JSON.parse(res) // 再變 object
        console.log(resobj)
      })
  }
}
</script>