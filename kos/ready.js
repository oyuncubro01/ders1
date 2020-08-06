module.exports = async client => {
  console.log(`${client.user.username} OPENED`)
 var fcoyun = [`Socket Bot s!yardım-s!help `]
  setInterval(function() {
    var fc = Math.floor(Math.random()*(fcoyun.length-0+1)+0);
    client.user.setActivity(fcoyun[fc]);
  }, 20000);
};
