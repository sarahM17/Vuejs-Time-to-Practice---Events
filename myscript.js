new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods : {
        clickedAlerts : function(){
            alert('The button is clicked!');
        },
        storedVal : function(event){
            this.value = event.target.value;
        }
    }
});