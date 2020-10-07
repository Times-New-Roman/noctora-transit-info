// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
Discord.Client.on('ready', () => {
  console.log('Enabled.');
});
Discord.Client.login('NzYzMTg5NTc5NzI0NjE5Nzg2.X30Frw._ld_6NeEme8SSJ1P503ttxp6TzY');


Discord.Client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!status')) {
    
    
    
    
    
    
    
    if (message.content.includes("M10")) {
      message.channel.send("Showing Information for the <@&763184341273542676>")
      const M10 = new Discord.MessageEmbed()
      .setColor(0xF600FF)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M10);
    }
    else if (message.content.includes("M11")) {
      message.channel.send("Showing information for the <@&763184341882503188>")
      const M11 = new Discord.MessageEmbed()
      .setColor(0x751549)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M11);
    }
    else if (message.content.includes("M12")) {
      message.channel.send("Showing information for the <@&763184340418428979>")
      const M12 = new Discord.MessageEmbed()
      .setColor(0xD16300)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M12);
    }
    else if (message.content.includes("M13")) {
      message.channel.send("Showing information for the <@&763251268323377203>")
      const M13 = new Discord.MessageEmbed()
      .setColor(0x00E2FF)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M13);
    }
    else if (message.content.includes('M1')) {
        message.channel.send("Showing Information for the <@&763182929277878313>")
        const M1 = new Discord.MessageEmbed()
        .setColor(0xFF0000)
        .setTitle("Partially Closed :yellow_circle:")
        .addField("All Eastbound services are currently disabled for work.", "Frequency: N/A")
        .addField("Westbound services from Noctora Central to Lansdowne Bay are currently active.", "Frequency: 5 Minutes")
        .addField("Notices:", "- Lansdowne East and Capitol Square are currently closed to all trains for platform-level renovations." )
        message.channel.send(M1);
    }
    else if (message.content.includes('M2')) {
      message.channel.send("Showing Information for the <@&763182930334974002>")
      const M2 = new Discord.MessageEmbed()
      .setColor(0x00BAFF)
      .setTitle("Service Between Select Stops Only :yellow_circle:")
      .addField("Current Service between St. Raven's Square and Noctora Central is operational.", "Frequency: 5 minutes")
      .addField("Notices", "N/A")
      message.channel.send(M2);
    }
    else if (message.content.includes("M3")) {
      message.channel.send("Showing Information for the <@&763182928712302592>")
      const M3 = new Discord.MessageEmbed()
      .setColor(0x0300FF)
      .setTitle("Good Service Throughout :green_circle:")
      .addField("Trains between Millennium Terminal 1 and Lansbury Cross / St. Williams are operating smoothly.", "Frequency: 5 Minutes")
      .addField("The Danfields branch is currently under construction and no trains will be running there until construction finishes.", "Frequency: N/A")
      .addField("Notices:", "- Greenham Lane is currently closed and under construction.\n- Trains to Millennium International Airport currently terminate at Millennium Terminal 1 while the other terminals are constructed.")
      message.channel.send(M3);
    }
    else if (message.content.includes("M4")) {
      message.channel.send("Showing information for the <@&763185182282219540>")
      const M4 = new Discord.MessageEmbed()
      .setColor(0x8B8B8B)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M4);
    }
    else if (message.content.includes("M5")) {
      message.channel.send("Showing information for the <@&763183431018086431>")
      const M5 = new Discord.MessageEmbed()
      .setColor(0x00816A)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M5);
    }
    else if (message.content.includes("M6")) {
      message.channel.send("Showing Information for the <@&763182931416973332>")
      const M6 = new Discord.MessageEmbed()
      .setColor(0x4DC252)
      .setTitle("No Service - Temporary Fault :red_circle:")
      .addField("There are currently no trains running on this line due to a fault.", "Frequency: N/A")
      message.channel.send(M6);
    }
    else if (message.content.includes("M7")) {
      message.channel.send("Showing Information for the <@&763184341273542676>")
      const M7 = new Discord.MessageEmbed()
      .setColor(0xFFDF00)
      .setTitle("No Service - Temporary Fault :red_circle:")
      .addField("There are currently no trains running on this line due to a fault.", "Frequency: N/A")
      message.channel.send(M7);
    }
    else if (message.content.includes("M8")) {
      message.channel.send("Showing Information for the <@&763184979760119828>")
      const M8 = new Discord.MessageEmbed()
      .setColor(0x000000)
      .setTitle("Manual Service - Request a Driver :green_circle:")
      .addField("Trains are available on a request-only basis between Lansbury Cross / St. Williams and Clifton Bridge.", "Frequency: Manual")
      message.channel.send(M8);
    }
    else if (message.content.includes("M9")) {
      message.channel.send("Showing Information for the <@&763183540874641448>")
      const M9 = new Discord.MessageEmbed()
      .setColor(0x6B3204)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(M9);
    }
    else if (message.content.includes("Overground")) {
      message.channel.send("Showing information for the <@&763183535967830077>")
      const Overground = new Discord.MessageEmbed()
      .setColor(0xFF7D00)
      .setTitle("Manual Service - Request a Driver :red_circle:")
      .addField("Trains are available on a request-only basis from Noctora Central to Yorksville West.", "Frequency: Manual")
      message.channel.send(Overground);
    }
    else if (message.content.includes("RLR")) {
      message.channel.send("Showing information for the <@&763183537766662146>")
      const RLR = new Discord.MessageEmbed()
      .setColor(0x026469)
      .setTitle("No Service - Under Construction :red_circle:")
      .addField("There are currently no trains running on this line.", "Frequency: N/A")
      message.channel.send(RLR);
    }
    else if (message.content.includes("National Rail")) {
      message.channel.send("Showing information for the <@&763182851708813312>")
      const NatRail = new Discord.MessageEmbed()
      .setColor(0xFFFFFF)
      .setTitle("National Rail Services")
      .addField("Airport Link :green_circle:", "Manual trains are available between Noctora Central and Millennium Airport.\nAirport Link is managed by ItsAdamLY and MadMad Rail.")
      message.channel.send(NatRail);
    }
  }

  
  else if (message.content.startsWith("!list")) {
    message.channel.send("Displaying a list of all current rail services.")
    const underground = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setTitle("Noctora Underground")
    .addField("Victoria Line", "`M2`")
    .addField("Westney Line", "`M3`")
    .addField("Platinum Line", "`M4`")
    .addField("Downtown Line", "`M5`")
    .addField("District Line", "`M6`")
    .addField("Circle Line", "`M7`")
    .addField("Whitton Line", "`M8`")
    .addField("Manor Line", "`M9`")
    .addField("Lewiston and City Line", "`M10`")
    .addField("Metropolis Line", "`M11`")
    .addField("Century Line", "`M12`")
    .addField("Atlantic Line", "`M13`")

    message.channel.send(underground);
    const overground = new Discord.MessageEmbed()
    .setTitle("Noctora Overground")
    .setColor("WHITE")
    .addField("East Noctora Line", "`ENL`")
    .addField("West Noctora Line", "`WNL`")
    
    message.channel.send(overground);
    const NatRail = new Discord.MessageEmbed()
    .setTitle("National Rail Services")
    .setColor("WHITE")
    .addField("Airport Link", "`AIR`")
    message.channel.send(NatRail);
  }
})
