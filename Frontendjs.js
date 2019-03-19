/** AJAX */

// 비동기적 웹 서비스 개발 기법
// 페이지 이동없이 서버에 요청 보내고 응답을 받는 기술
//Jquery axios 라이브러리 사용

<Script>
    var xhr = new SXLHTTPRequest()
    xhr.omreadystatechange = function() {
        if(xhr.readystate == xhr.DONE){
            if(xhr.status == 200 || xhr.status == 201){
                console.log(xhr.responseText)
            }else{
                console.error(xhr.responseText)
            }
        }        
    };
    xhr.open('GET','https://www.zerocho.com/api/get')
    xhr.send()

</Script>