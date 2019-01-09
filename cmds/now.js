
module.exports.run = async (bot,message,args) => {

  message.channel.send("3"),
  message.channel.send("2"),
  message.channel.send("1"),
  message.channel.send("Go!");

}

module.exports.help = {
  name: "go"
}
