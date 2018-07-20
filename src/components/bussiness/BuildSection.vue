<template>
<div class="BuildSection">
  <div class="row">
        <div class="col-md-4">           
            <div class="left info">            
              <div class="leftinfo">Building</div>
              <div class="leftrightinfo"><a style="color:white" href="#">8</a></div>
            </div>                     
        </div>
        <div class="col-md-4">          
            <div class="center info">            
              <div class="leftinfo">ldle</div>
              <div class="centerrightinfo"><a style="color:white" href="#">15</a></div>
            </div>            
        </div>
        <div class="col-md-4">          
            <div class="right info">            
              <div class="rightinfo col-md-4"">
                <div class="righttopinfo">ALL</div>
                <div class="rightbottominfo"><a style="color:#2c3e50" href="#">112</a></div>  
              </div>
              <div class="rightinfo col-md-4"">
                <div class="righttopinfo">PHYSTCAL</div>
                <div class="rightbottominfo"><a style="color:#2c3e50" href="#">80</a></div>  
              </div>
              <div class="rightinfo col-md-4"">
                <div class="righttopinfo">VUETUAI</div>
                <div class="rightbottominfo"><a style="color:#2c3e50" href="#">15</a></div>  
              </div>
            </div>           
        </div>       
      </div>
      </div>
</template>
 
<script>
</script>
<style>
 .info{
    width: 280px;
    height: 140px;        
 }
 .leftinfo
 {
  float:left;
  font-size:18px;
  font-weight:bold;
  padding-left:15px;
  padding-top:20px;
  color:white;  
 }
 .leftrightinfo
 {
  float:right;
  font-size:45px;  
  padding-left:15px;  
  color:white;
  padding-top: 70px;
  padding-right: 10px;
   cursor:pointer; 
 }
  .leftrightinfo:hover{
       transform: scale(1.2); /* 放大1.2倍 */
   } 
 .left{    
   background: url('~@/assets/icon_build.jpg') top center no-repeat;         
 }
 .center{    
   background: url('~@/assets/icon_ldle.jpg') top left 30% no-repeat;   
 }
 .centerrightinfo
 {
  float:right;
  font-size:45px;  
  padding-left:15px;  
  color:white;
  padding-top: 70px;
  padding-right: 10px;
   cursor:pointer; 
 }
  .centerrightinfo:hover{
       transform: scale(1.2); /* 放大1.2倍 */
   }
 .right{
   width:285px;
  background-color:white;
 }
.rightinfo
{
    padding-top: 25px;
    height: 100px;  
}
.rightbottominfo
{
  font-size:20px;
 margin-top:20px;
 font-weight:bold;
 cursor:pointer;
}
.righttopinfo
{
font-size:12px;
font-weight:bold;
height:50px;
padding-top:15px;
}
.righttopinfo:hover{
color:#0084CF;
border-bottom:3px solid #0084CF;
}
.rightbottominfo:hover{
       transform: scale(1.2); /* 放大1.2倍 */
   }
   a:hover{      
    text-decoration: none;
   }
   a:link{text-decoration:none;}
   a:visited{text-decoration:none; }
   a:active{text-decoration:none;}
</style>