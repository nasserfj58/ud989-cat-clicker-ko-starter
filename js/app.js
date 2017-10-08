var CatModel = function(name,imgsrc,nickNames){
  this.clickCount = ko.observable(0);
  this.name = ko.observable(name);
  this.imgsrc = ko.observable(imgsrc);
  this.nickNames = ko.observableArray(nickNames);
  this.imgAttributation = ko.observable("https://flicker.com/photos/bigcat");

  this.level = ko.computed(function(){
        if(this.clickCount() >=0 && this.clickCount() <10){
           return "New Born";
        }
        else if(this.clickCount() >=10 && this.clickCount() <100){
           return "Infant";
        }
        else{
          return "Teen";
        }
   },this);
}



var ViewModel = function() {
  var self = this;
  this.CurrentCat = ko.observable(new CatModel("Taby","img/9648464288_2516b35537_z.jpg",["lucy","hana","aAm Jdo"]));

 this.incrementFunction = function(){
   this.clickCount(this.clickCount() + 1);
 };
}
ko.applyBindings(new ViewModel());
