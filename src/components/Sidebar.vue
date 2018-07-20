<template>
  <div class="sidebar">
   <div class="col-md-12 bootstrap-admin-col-left" style="background-color: #222d32; ">
                    <ul class="nav navbar-collapse collapse bootstrap-admin-navbar-side" style="text-align: left;" >
                        <li>
                            <a href="#">                <b class="glyphicon glyphicon-dashboard">    DASHBOARD</b></a> 
                        </li>  
                        <li>
                            <a href="#">               <b class="glyphicon  dashfiled glyphicon-user">          AGETNS</b></a>
                        </li>                                                   
                        <li>
                            <a href="#">               <b class="glyphicon dashfiled glyphicon-fire">           MYCRUISE</b></a> 
                        </li>  
                         <li>
                            <a href="#">               <b class="glyphicon dashfiled glyphicon-compressed">           HELP</b></a> 
                        </li>                      
                    </ul>
                </div>
                <div class="col-md-12 sidebarbottom bootstrap-admin-col-left" style="background-color: #222d32; ">
                    <ul class="nav navbar-collapse collapse bootstrap-admin-navbar-side" style="text-align: left;" >
                    <h3 style="font-size: 18px;margin-left: 10px;color: #0084CF;">History:</h3>
                        <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtwo....</a> 
                        </li>  
                        <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtwo....</a>
                        </li>                                                   
                        <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtworks....</a> 
                        </li>  
                         <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtworks....</a> 
                        </li>   
                        <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtworks....</a> 
                        </li> 
                        <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtworks....</a> 
                        </li> 
                        <li class="acalss">
                            <a  href="#">bjstdmngbdr08.thoughtworks....</a> 
                        </li>                    
                    </ul>
                </div>
  </div>
  
</template>
 
<script>
export default {
  name: 'Sidebar'   
}
</script>
<style>
.acalss{
  font-size:8px;
  list-style-type:circle ;
}
.acalss>a:hover{
  background-color: rgb(34, 45, 50);
}
.sidebarbottom{
  background-color: rgb(34, 45, 50);
    bottom: 0;
    /* background-color: white; */
    color: black;
    text-align: left;
    position: absolute;
    z-index: 2;
    bottom: 50px;
    left: 0px;
    width: 100%;
    /* height: 12px; */
    /* padding: 20px 12px 20px 12px; */
}
.dashfiled
{
 font-size: 14px;
    maring-top: 2px;  
}
.glyphicon-dashboard{
    font-size: 14px;
    maring-top: 2px;    
}
ul>li>a{
   color:white;
}
.bootstrap-admin-col-left{
  padding:0;
}
.bootstrap-admin-navbar-side
{
  padding:0;
}
  .sidebar{    
    font-size:14px;
    font-family:Arial;    
     height:auto;
    position: fixed;
    top: 0;
    bottom: 0;    
    padding-top: 70px;
    width: 180px;
    overflow: auto;    
    background-color: #222d32;
    -webkit-box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.2);
    -webkit-transition: left 0.3s ease,
  width 0.3s ease;
    -o-transition: left 0.3s ease,
 width 0.3s ease;
    transition: left 0.3s ease,
 width 0.3s ease;
   color:white,

  }
.nav>li>a{
    height:45px !important;
  }
 .nav > li > a:hover
  { 
    color:#00B4CF;
    background-color:#E5E5E5;
  } 
</style>