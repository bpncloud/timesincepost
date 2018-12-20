module.exports = timesincepost 

function timesincepost(postdate) {



                      //yyyy-mm-dd - PHP Date
    var pdate   = new Date(postdate) //Month is 0-11 in JavaScript!
    console.log(pdate);
    var today = new Date();
     
    // datepart: 'y', 'm', 'w', 'd', 'h', 'n', 's'
    //console.log('Date Result s: ' + Date.DateDiff('s', pdate, today)); 
    var seconds = Date.DateDiff('s', pdate, today);
    var minutes = Date.DateDiff('n', pdate, today);
    var hours = Date.DateDiff('h', pdate, today);
    var days = Date.DateDiff('d', pdate, today);
    var weeks = Date.DateDiff('w', pdate, today);

    var _print = '';
    
    if(weeks>=52)
    _print = Math.floor(weeks/52)+'y'; 
    if(weeks<52){
        if(weeks>1){
            _print = weeks+'w';   
        }else{
            //less than 1 week
            if(days==0){
                  if(hours==0){
                    
                    if(minutes>0)
                    _print = minutes+'m';       
                    else
                    _print = 'Just now';       
                        

                  }else{
                    _print = hours+'h';     
                  }  
            }else{
                _print = days+'d';     
            }
        }

    }
    
    return _print;   
    
}


Date.DateDiff = function(datepart, fromdate, todate) {	
    datepart = datepart.toLowerCase();	
    var diff = todate - fromdate;	
    var divideBy = { w:604800000, 
                     d:86400000, 
                     h:3600000, 
                     n:60000, 
                     s:1000 };	 
    
    return Math.floor( diff/divideBy[datepart]);
  }