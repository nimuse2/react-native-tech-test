
export function imageFormat ( uri ) {
    var json_uri = {uri}
    var j2 = "file:///Users/nickwalters/riverford-app/reactGraphQL/RNGraphQL/img/rford_sml.png";
    if(uri !== undefined ){
      j2 = json_uri.uri.master_uri;
    }
    return j2;
}
export function isImage(_uri){
    if(_uri !== undefined){
        return false;
    }else{
        return true;
    }
    
}
export function timeFormat(_time) {

    var rTime1 = _time.replace('PT', '');
    var rTime2 = rTime1.split('');

    var tArr = [];
    rTime2.forEach(function(_k,_i){
        if (_k == "H"){
            if(rTime2[(_i - 1)] == 1){
                tArr.push(" Hour ");
            }else{
                tArr.push(" Hours ");
            }
            
        }else if(_k == "M"){
            if(rTime2[(_i - 1)] == 1){
                tArr.push(" Minute");
            }else{
                tArr.push(" Minutes");
            }
            
        }else{
            tArr.push(_k);
        }
    })
    var rTime = tArr.join("");
    
    return rTime;
  }