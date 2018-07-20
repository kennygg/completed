<template>
  <div class="contentbar">
  <buildsection></buildsection> 
  <navigation></navigation>    
  <tablecontent></tablecontent>
  </div>
</template>
 
<script>

export default {
  name: 'Contentbar',  
}
</script>

<style>

.contentbar
{
   height:auto;
   margin-left:190px;
    min-height: calc(100vh - 50px);
    margin-top: 50px;
    padding: 30px;
    background-color: #E5E5E5;
    -webkit-transition: margin-left 0.3s ease;
    -o-transition: margin-left 0.3s ease;
    transition: margin-left 0.3s ease;
}
</style>