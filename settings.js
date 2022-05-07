const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = false // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Alphabot-Mdོ" //AxelClouds Bot
global.ownername= "ᴹᴿ᭄ ZeeoneOfcོ ×፝֟͜×" //DhanyGanteng
global.myweb ="https://api-alphabot.herokuapp.com/" //bebas asal jan hapus
global.youtube = "https://youtube.com/c/ZeeoneOfc" //bebas asal jan hapus
global.github = "https://zeeone-ofc.github.io/" //bebas
global.email = "zeeoneofc@gmail.com" //AxelNetwork@gmail.com
global.region = "Indonesia" //bebas
global.ownernomer = "62887435047326" // "6285733374626"
global.ownernomerr = "+62887435047326" // "+6285733374626"
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["62887435047326","62887435047326","6285342106390"] //ganti agar fitur owner bisa di gunakan
global.packname = '© Alphabot-Mdོ' //AxelClouds
global.author = 'Di Buat Oleh ZeeoneOfc' //DhanyBaek
global.sessionName = '{
	"clientID": "+HPfVQTe1HidaV7YQBZ/8A==",
	"serverToken": "1@5I6WmmFSmrovb1IgzMllE8XbT2WQI3h9ccNBqzXSNkz1i9am65YHlGQJgVx0UMFFvzhz4GkKMPma7A==",
	"clientToken": "v5eksTW+uGq/QjRk0PovI86zPfbCTjH0vccNmOMDvfc=",
	"encKey": "qT05y1cco9EJTZI083cuQhmvBrEnnyXtTVyPYhF0cf0=",
	"macKey": "PSP+h7tldZpXTnmbzXKUwqODtJ8a5Qr64v3GJEm5b9c="
}'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
