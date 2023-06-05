const minHeight = {
  0: '0',
  full: '100%',
  screen: '100vh',
  banner: '456px',
  50:'50px',
  60:'60px',
  70:'70px',
  50:'50px',
  80:'80px',
  90:'90px',
  100:'100px',
  120:'120px',
  150:'150px',
  250: '250px',
  300: '300px',
  320: '320px',
  350: '350px',
  370: '370px',
  380: '380px',
  400: '400px',
  434: '434px',
  450: '450px',
  500: '500px',
}

let max = 500;
for (let i = 0; i <= max; i++) {
  minHeight[i] = i + 'px';
}
module.exports = {
  minHeight
}
