const { EmbedBuilder } = require('discord.js');
const moment = require('moment');
const Premium = require("../../settings/models/Premium.js");

module.exports = {
    name: ["premium", "profile"],
    description: "View your premium profile!",
    category: "Premium",
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });
        
        const PremiumPlan = await Premium.findOne({ Id: interaction.user.id })
        const expires = moment(PremiumPlan.premium.expiresAt).format('MMMM Do YYYY');

        try {
            if (user && user.isPremium) {
                const embed = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "premium", "profile_desc", {
                        user: interaction.user.tag,
                        plan: PremiumPlan.premium.plan,
                        expires: expires
                    })}`)
                    .setColor(client.color)

                return interaction.editReply({ embeds: [embed] });

            } else {
                const embed = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "nopremium", "premium_desc")}`)
                    .setColor(client.color)
        
                return interaction.editReply({ content: " ", embeds: [embed] });
            }
        } catch (err) {
            console.log(err)
            interaction.editReply({ content: `${client.i18n.get(language, "nopremium", "premium_error")}` })
        }
    }
}