<template>     
  <div name="tablecontent">
  <div class="row">
  <div class="col-md-12" v-for="item in itemlis">
    <div class="trcontent">
      <div class="col-md-2">
        <div v-if="item.isShowWindows" class="windowspic"></div>
        <div v-if="item.isShowubuntu" class="ubuntupic"></div>
        <div v-if="item.isShowdebian" class="debianpic"></div>
        <div v-if="item.isShowususe" class="ususepic"></div>
        <div v-if="item.isShowcentos" class="centospic"></div>
      </div>
      <div class="col-md-10 trcontentrrighttop">
        <div class="col-md-6 trcontenttop"><div class="glyphicon lock glyphicon-blackboard"></div>
          <div class="trcontenttophref"><a href="#" v-text="item.name"></a></div>
          <div class="trstatus1" v-if="item.status==='building'" v-text="item.status"></div>
          <div class="trstatus" v-if="item.status==='idle'" v-text="item.status"></div>
          </div>        
          
          <div class="col-md-3 trcontenttop trcontentrrighttop"><div class="glyphicon glyphicon-info-sign lock"></div> 
          <div class="trcontenttophref" v-text="item.ip"></div>  </div>
          <div class="col-md-3 trcontenttop trcontentrrighttop"><div class="glyphicon glyphicon-folder-close lock"></div>
          <div class="trcontenttophref" v-text="item.location"></div></div>  
                <div class="col-md-12 trcontenttop">               
                    <div id="example_bottom" data-toggle="popover"   data-placement="bottom"  @click="addtoopopover(item)" class="glyphicon glyphicon-plus"></div>
                    <div class="trresource" v-for="resitem in item.resources">
                        <div class="trcontenttophref" v-text="resitem"></div>
                        <div class="glyphicon glyphicon-trash" @click="delresources(item.id,resitem)"></div>
                    </div> 
                    <div class="pull-right" v-show="item.status==='building'"><button type="button" class="btn canceladd" style="margin-left: 15px;background-color: #00B4CF;color: white;"><div class="glyphicon glyphicon-ban-circle" style="font-size: 12px;"></div>Deny</button></div>                                       
                </div>                    
      </div>
    </div>
  </div> 
  </div>
</div>

</template>
 
<script>

export default {
  name: 'tablecontent',
  methods:{      
      delresources:function(id,name)
      {
           var self=this;
           var currentObj=[];
           var updateObj;
           for(var i=0;i<self.itemlis.length;i++)
           {
               if(self.itemlis[i].id==id)
               {
                   currentObj=self.itemlis[i].resources;
                   for(var j=0;j<currentObj.length;j++)
                    {
                        if(currentObj[j]==name)
                        {                              
                             currentObj.splice(j,1);
                        }
                    } 
                    self.itemlis[i].resources =   currentObj; 
                    updateObj=self.itemlis[i];
               }
               
           }                     
                   jQuery.ajax({
                        method:'put',
                            url:'http://localhost:3003/agents/' + id,  
                            traditional: true,                          
                            data:  updateObj,                            
                        }).then(function(resp){                                                         
                             alert("delete success")   ;
                        }).catch(resp => {
                            console.log('请求失败：'+resp.status+','+resp.statusText);
                        });   
        },

        addtoopopover:function(item)
        {
             $('[data-toggle="popover"]').each(function () {
                var element = $(this);   
                var closeelement=$(".close");                    
                var txt = element.html();       
                element.popover({
                trigger: 'manual',
                placement: 'bottom', //top, bottom, left or right          
                html: 'true',          
                content: '<div style="/* background-color: #f7f7f7; */height: 10px;"><div @click="hidetoopopover()" class="glyphicon glyphicon-remove" style="float: right;padding: 10px 15px;font-size: 20px;font-weight: bold;"></div></div><div class="popover-content" style="float: clear;/* margin-top: 40px; */"><span class="label" style="color: #2D4054;">Separate multiple resource with commas</span><input type="text" style="width:90%" class="form-control" placeholder="Input Value" aria-describedby="sizing-addon1" style="margin-top: 5px;"><div style="margin-top: 15px;"><button @click="addresources(item.id,resitem)" type="button" class="btn submitadd" style="margin-left: 5px;background-color: #0084CF;color: white;" >Add Resource</button><button type="button" class="btn canceladd" style="margin-left: 15px;width: 117px;background-color: #2D4054;color: white;">Cancel</button></div></div>',
                })
                .on("click", function () {
                var _this = this;
                $('.arrow').css("left","none");
                $(this).popover("show");          
                }).on('shown.bs.popover', function () {
                   $('.glyphicon-remove').unbind("click").click(function(){
                        element.popover("hide");
                    }); 
                     $('.submitadd').unbind("click").click(function(){
                         var broswer=$(":input.form-control").val();
                         var resources=[];
                         resources=item.resources; 
                         if(!resources) 
                         {
                             resources=[];
                         }                                        
                         resources.push(broswer);
                         item.resources=resources;
                         $.ajax({
                        method:'put',
                            url:'http://localhost:3003/agents/' + item.id,  
                            traditional: true,                          
                            data:  item,                            
                        }).then(function(resp){                                                         
                             alert("added success")   ;
                        }).catch(resp => {
                            console.log('请求失败：'+resp.status+','+resp.statusText);
                        });
                         
                         element.popover("hide");
                    }); 
                     $('.canceladd').unbind("click").click(function(){
                        element.popover("hide");
                    }); 
                   
                })                               
            }); 
                             
        },                  
  },
created:function(){
     var self=this;
    jQuery.ajax({
            method:'get',
            traditional: true, 
                url:'http://localhost:3003/agents'
            }).then(function(resp){
                    var data=[];
                     var resources=[];
                    for(var i=0;i<resp.length;i++){                       
                        if(resp[i].os=="windows")
                        {
                            resp[i].isShowWindows=true;
                        }
                        if(resp[i].os=="ubuntu")
                        {
                            resp[i].isShowubuntu=true;
                        }
                        if(resp[i].os=="debian")
                        {
                            resp[i].isShowdebian=true;
                        }
                        if(resp[i].os=="suse")
                        {
                            resp[i].isShowususe=true;
                        }
                        if(resp[i].os=="centos")
                        {
                            resp[i].isShowcentos=true;
                        }
                        resources=resp[i].resources;
                        if(resources)
                        {
                            if(!(resources[0].length>1))
                            {
                                  resources=[];
                                  resources.push(resp[i].resources)  ;
                                  resp[i].resources=resources;
                            }
                        }
                        data.push(resp[i]);                       
                    }

                self.itemlis=data;                  
            }).catch(resp => {
                console.log('请求失败：'+resp.status+','+resp.statusText);
            });
} ,
  data () {
      return {
      msg: 'Welcome to Your Vue.js App',
      itemlis:[{
      "name": "bjstdmngbdr08.thoughtworks.com",
      "os": "windows",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.80",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 2
    }],
    }  
}
}
</script>

<style>
.trcontent
{
    margin-top:20px;
    height:120px;
    background-color:white;
}
.popover.bottom>.arrow
{
    left:10%;
    top: -11px;
    left: 10%;
    margin-left: -11px;
    border-top-width: 0;
    border-bottom-color: #999;
    border-bottom-color: rgba(0,0,0,.25);
}
.popover
｛
      position: relative;
    max-length:800px;
    width:800px;
｝
.popover-inner {
    width:800px;
}
.popover-content
{
    width:600px;
}
.trstatus
{
    width: 58px;
    float: left;
    color: white;
    margin-left: 10px;
    height:20px;
    background-color:#7FBC39;

}
.trstatus1
{
    width: 58px;
    float: left;
    color: white;
    margin-left: 10px;
    height:20px;
    background-color:#FF9A2A;

}
.trresource
{   
    font-weight:bold;
    float: left;    
    margin-left: 10px;
    height:20px;
    background-color:#E1E4E6;
    width: 100px;
    height: 25px;
    padding: 3px;    
}
.glyphicon-remove{
    cursor:pointer;
    color:#0084CF;
}
.glyphicon-plus
{
    font-size:18px;
    color:#0084CF;
    float: left;
    margin-top: 2px;
    cursor:pointer;
}
.glyphicon-trash
{
    margin-top: 2px;
}
.trcontentrrighttop
{
    margin-left: -15px;
    padding: 0px;
}
.trcontenttop
{
    float: left;
    font-size: 16px;
    margin-top: 18px;
}
.trcontenttophref
{
    float: left;
    margin-left: 10px;    
}
.lock{
    float: left;
    font-size: 16px;
    margin-top: 3px;
     opacity: 0.4; 
}
.windowspic{    
    width: 100px;
    height: 150px;
    background: url('~@/assets/windows.png') top left 30% no-repeat;   
 } 
 .ubuntupic{
     width: 100px;
    height: 150px;
    background: url('~@/assets/ubuntu.png') top left 30% no-repeat;   
 }
 .debianpic{
     width: 100px;
    height: 150px;
    background: url('~@/assets/debian.png') top left 30% no-repeat;   
 }
 .ususepic{
     width: 100px;
    height: 150px;
    background: url('~@/assets/suse.png') top left 30% no-repeat;   
 }
 .centospic{
     width: 100px;
    height: 150px;
    background: url('~@/assets/centos.png') top left 30% no-repeat;   
 }
 a:hover{      
    text-decoration: none;
   }
   a:link{text-decoration:none;}
   a:visited{text-decoration:none; }
   a:active{text-decoration:none;}
</style>