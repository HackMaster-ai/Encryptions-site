const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};

module.exports = {
    encrypt,
    decrypt
};

/*encryption */
var btn1_id = document.getElementById('btn1')


btn1_id.addEventListener('click', event => {
    var recieve = prompt("Write the message you want to encrypt :");
    var word = encrypt(recieve);
    document.getElementById('p1').textContent = JSON.stringify(word);
    
});

var btn2_id = document.getElementById('btn2')
    
btn2_id.addEventListener('click', event => {
    var hh = prompt("Enter the message you want to decrypt :");
    var hh_object = JSON.parse(hh);
    var dd = decrypt(hh_object);
    document.getElementById('p2').textContent = dd;
});

function copytext(htmlElement)
{
	if(!htmlElement) {
		return;
	}

	let elementText = htmlElement.innerText;
	let inputElement = document.createElement('input');
	inputElement.setAttribute('value', elementText);
	document.body.appendChild(inputElement);
	inputElement.select();
	document.execCommand('copy');
	inputElement.parentNode.removeChild(inputElement);
}

var msg = document.querySelector(".msg");


document.querySelector('#copy_btn').onclick = 
function () 
{
        copytext(document.querySelector('#p1'));
        msg.classList.add("show");
        setTimeout(function(){
              msg.classList.remove("show");
        },800); 
}

