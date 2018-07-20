<template>
  <div class="sideHeader">
    <nav class="navbar navbar-default navbar-fixed-top bootstrap-admin-navbar bootstrap-admin-navbar-under-small" role="navigation">
            <div class="container">
                <div class="row">
                   <div class="col-lg-10 headerimg" >                      
                    </div>                                                         
                   <ul class="nav pull-right">
                    <li class="dropdown ">                      
                     <div class="pull-right logininfo">   </div>             
                         <a href="#" class="dropdown-toggle glyphicon glyphicon-chevron-down" data-toggle="dropdown"></a>  
                        <ul class="dropdown-menu">
                            <li><a href="javascript:;"><b class="glyphicon glyphicon-user">   Profile</b></a></li>
                            <li><a href="javascript:;"><b class="glyphicon glyphicon-off">    SingOut</b></a></li>
                        </ul>
                    </li>                   
                    </ul>
                </div>
            </div><!-- /.container -->
        </nav>
  </div>
  
</template>
 
<script>
export default {
  name: 'SideHeader', 
}
</script>
<style>
.glyphicon-off{
    font-weight:bold;
}
.glyphicon-user
{
font-weight:bold;
}
.dropdown-menu
{        
     background-color:#E1E4E6;
    top: 60px;
    left: -40px;
}
.navbar-default
{
    background-color: white;
}
.glyphicon-chevron-down
{
    float: right;
    margin-right: -105px;    
    opacity: 1;
    color:#E1E4E6;
    margin-top: 20px;
}
.logininfo
{
        margin-right: 45px;
    z-index: 15;
    margin-top: 16px;
    width: 100px;
    height: 45px;
    background: url('~@/assets/login.png') top center no-repeat; 
}
.headerimg
{
    margin-top:5px;
    wifth:100px;
    height:45px;
    background: url('~@/assets/title.png') top center no-repeat;  
}
</style>