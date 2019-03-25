const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('abc').digest('base64'));

console.log('hex:', crypto.createHash('sha512').update('abvcde').digest('hex'));


// 단방향 암호화, 양방향 암호화

// 단방향의 경우 한번 암호화 하면 원래 문자열을 찾을 수 없다. DB에 올리는 순간 암호화되서 올라가기 때문에 
// 다시 복호화는 가능한 경우도 있지만 찾을 수 없다. 
// 양방향 암호화의 경우 키를 사용하여 암호화한다. 암호를 복호화 할때 암호화시 사용했던 키를 사용하여 복호화한다. 
// 비밀번호 찾기를 했을 때 임시 비밀번호를 제공하는 것이 요즘 대부분인데 이말은 단방향 암호화를 사용했다는 의미이다.