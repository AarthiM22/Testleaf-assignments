const browserName='chrome';
function getVersion(){
if(browserName === 'chrome'){
 let mybrowserVersion= 'v 22';
 console.log('inside function' ,mybrowserVersion);
}
 console.log('outside function' ,mybrowserVersion)   
}getVersion()
