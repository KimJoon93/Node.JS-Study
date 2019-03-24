const os = require('os');

console.log('운영체제 정보 ===========================================');

console.log('os.arch(): ', os.arch()); //x64
console.log('os.platform(): ', os.platform()); //win 32
console.log('os.type(): ', os.type());  // windows NT
console.log('os.uptime(): ', os.uptime()); // 
console.log('os.hostname(): ', os.hostname()); // Laptop
console.log('os.release(): ', os.release());    // 10.0.....


console.log('cpu 정보 ================================================');
console.log('os.cpus(): ', os.cpus());


console.log('메모리 정보 ==============================================');
console.log('os.freemem(): ', os.freemem());







