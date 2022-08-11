 const o=document.getElementById("i")
        function d(n) {
            o.value+=n
        }
       
        function ans(){
            try{
                o.value=eval(o.value)
            }
            catch(err){
                o.value="INVALID SYNTAX"
            }
        }
        function cl(){
            o.value=""
        }
        function c(){
            o.value=o.value.slice(0,-1)
        }
