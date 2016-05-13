angular.module("appSoftware").service("API", function($http,config)
{
    this.listEmpresa = function(){
      return $http.get(config.baseUrl + "/empresa/list");  
    };
    
    this.saveEmpresa = function(empresa){
      var metodo;
      if(empresa.id != null){
          metodo = "update";
          return $http.put(config.baseUrl + "/empresa/"+metodo, empresa);  
      
      }
      else{
          metodo = "insert";
          return $http.post(config.baseUrl + "/empresa/"+metodo, empresa);  
      
      }
        
      
    };
    
    this.deleteEmpresa = function(cp){
      return $http.delete(config.baseUrl + "/empresa/delete/"+cp);  
    };
    
    this.listSoftware = function(){
      return $http.get(config.baseUrl + "/software/list");  
    };
    
    this.saveSoftware = function(software){
      var metodo;
      if(software.id != null){
          metodo = "update";
          return $http.put(config.baseUrl + "/software/"+metodo, software);  
      
      }
      else{
          metodo = "insert";
          return $http.post(config.baseUrl + "/software/"+metodo, software);  
      
      }
        
      
    };
    
    this.deleteSoftware = function(cp){
      return $http.delete(config.baseUrl + "/software/delete/"+cp);  
    };
});     
        





