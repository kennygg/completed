<template>
<div class="BuildSection">
  <div class="row">               
        <div class="col-md-12">          
            <div class="navigation_panel">  
            <div class="col-md-4 nav_left_panel">                         
                <div class="col-md-4 leftpanel">ALL</div>
                <div class="col-md-4 leftpanel">PHYSTCAL</div>
                <div class="col-md-4 leftpanel">VUETUAI</div>
            </div>
            <div class="col-md-3 searchinput">               
                <span class="glyphicon glyphicon_lock glyphicon-search"></span>
                <input type="text" class="createsearchinput" name="usrname" ></input>                               
            </div>
            <div class="col-md-5">               
                <span class="glyphicon  pull-right glyphicon-disp glyphicon-th"></span>
                <span class="glyphicon  pull-right glyphicon-disp glyphicon-th-list"></span>                      
            </div>
              </div>              
            </div>           
        </div>       
      </div>
      </div>
</template>
 
<script>
</script>
<style>
.nav_left_panel
{
    padding-left:0px;
}
.searchinput{
    padding-right: 0px;
    margin-left:-15px;
    margin-top:10px;
    outline: none;
}
.createsearchinput{
    background-color: #E1E4E6;
    border-radius: 4px;
    height: 30px;
    float: left;
}
 .navigation_panel{
  margin-top:15px;
  background-color:white;
  height:50px;
 }
 .leftpanel
{
text-align:center;
float:left;
font-size:12px;
font-weight:bold;
height:50px;
padding-top:15px;
padding-left:15px;
padding-right:15px;
}
.leftpanel:hover{
color:#00B4CF;
border-bottom:3px solid #0084CF;
border-right:1px solid #E1E4E6;
}
.glyphicon_lock{
    float: left;
    left: 20px;
    top: 8px;
    font-weight: bold;
    background-color: #E1E4E6;
    opacity: 0.5;    
}
.glyphicon-disp {
    color: #435466;
    font-size: 20px;
    margin-left: 10px;
    margin-top: 10px;   
        }
.glyphicon-disp:active{
     color:#0084CF;
    }
</style>