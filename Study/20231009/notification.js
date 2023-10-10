const { EmbedBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, PermissionStatus } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("공지")
    .setDescription("공지를 전송합니다.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelaoption((f)=>{
        f.setName("채널")
        .setDescription("공지를 전송할 채널을 선택해주세요")
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildText)
    }),
    /**
     * 
     * @param {import("discord.js").ChatInputCommandInteraction} interaction 
     */
    async execute(interaction){
        const option_channel = interaction.options.getChannel("채널");
        const embed = new EmbedBuilder()
        .setTitle("공지사항")
        .setColor("purple")
        .setFooter({
            text: 작성자: `${
                interaction.user.discriminator == 0
            }`
        })
    }

}