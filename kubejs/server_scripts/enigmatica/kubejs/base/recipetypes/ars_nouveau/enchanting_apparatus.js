onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_split'],
            reagent: 'minecraft:arrow',
            output: Item.of('32x ars_nouveau:split_arrow'),
            id: 'ars_nouveau:split_arrow'
        },
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_amplify'],
            reagent: 'minecraft:arrow',
            output: Item.of('32x ars_nouveau:amplify_arrow'),
            id: 'ars_nouveau:amplify_arrow'
        },
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_pierce'],
            reagent: 'minecraft:arrow',
            output: Item.of('32x ars_nouveau:pierce_arrow'),
            id: 'ars_nouveau:pierce_arrow'
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:ingots/gold_brass',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone',
                'ars_nouveau:arcane_stone'
            ],
            reagent: '#forge:storage_blocks/mana',
            output: 'ars_nouveau:summoning_crystal',
            id: 'ars_nouveau:summoning_crystal'
        },
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/gold_brass', 'ars_nouveau:glyph_projectile'],
            reagent: 'minecraft:bow',
            output: 'ars_nouveau:spell_bow',
            id: 'ars_nouveau:spell_bow'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:nuggets/gold_brass',
                '#forge:nuggets/gold_brass',
                '#forge:nuggets/gold_brass',
                '#forge:nuggets/gold_brass',
                '#forge:nuggets/gold_brass'
            ],
            reagent: 'ars_nouveau:carbuncle_shards',
            output: 'ars_nouveau:carbuncle_charm',
            id: 'ars_nouveau:carbuncle_charm'
        },
        {
            inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:ingots/gold_brass'],
            reagent: '#forge:rods/wooden',
            output: 'ars_nouveau:dominion_wand',
            id: 'ars_nouveau:dominion_wand'
        },
        {
            inputs: [
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:feathers',
                '#forge:feathers',
                '#forge:feathers',
                'ars_nouveau:glyph_launch'
            ],
            reagent: 'ars_nouveau:mundane_belt',
            output: 'ars_nouveau:belt_of_levitation',
            id: 'ars_nouveau:belt_of_levitation'
        },
        {
            inputs: [
                '#forge:gems/quartz',
                '#forge:gems/quartz',
                '#forge:gems/quartz',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:gems/quartz'
            ],
            reagent: 'ars_nouveau:arcane_relay',
            output: 'ars_nouveau:arcane_relay_splitter',
            id: 'ars_nouveau:arcane_relay_splitter'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass'
            ],
            reagent: 'ars_nouveau:mana_jar',
            output: 'ars_nouveau:arcane_relay',
            id: 'ars_nouveau:arcane_relay'
        },
        {
            inputs: [
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/diamond',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'ars_nouveau:novice_spell_book'
            ],
            reagent: '#forge:eggs',
            output: 'ars_nouveau:whelp_charm',
            id: 'ars_nouveau:whelp_charm'
        },
        {
            inputs: [
                '#forge:gems/mana',
                'ars_nouveau:mana_bloom_crop',
                'ars_nouveau:mana_bloom',
                '#forge:gems/diamond',
                'minecraft:oak_sapling',
                'minecraft:spruce_sapling',
                'minecraft:birch_sapling',
                '#forge:seeds'
            ],
            reagent: 'ars_nouveau:sylph_shards',
            output: 'ars_nouveau:sylph_charm',
            id: 'ars_nouveau:sylph_charm'
        },
        {
            inputs: [
                '#forge:rods/blaze',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass',
                'ars_nouveau:glyph_redstone_signal',
                '#forge:storage_blocks/quartz',
                '#forge:storage_blocks/redstone',
                'ars_nouveau:spell_parchment'
            ],
            reagent: 'minecraft:dispenser',
            output: 'ars_nouveau:spell_turret',
            id: 'ars_nouveau:spell_turret'
        },
        {
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/ender',
                '#forge:gems/diamond',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/diamond',
                '#forge:gems/ender',
                '#forge:gems/diamond'
            ],
            reagent: 'ars_nouveau:ring_of_potential',
            output: 'ars_nouveau:ring_of_lesser_discount',
            id: 'ars_nouveau:ring_of_lesser_discount'
        },
        {
            inputs: [
                '#forge:gems/diamond',
                '#forge:rods/blaze',
                '#forge:gems/diamond',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/diamond',
                '#forge:rods/blaze',
                '#forge:gems/diamond'
            ],
            reagent: 'ars_nouveau:ring_of_lesser_discount',
            output: 'ars_nouveau:ring_of_greater_discount',
            id: 'ars_nouveau:ring_of_greater_discount'
        },
        {
            inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana'],
            reagent: '#forge:seeds',
            output: 'ars_nouveau:mana_bloom_crop',
            id: 'ars_nouveau:mana_bloom_crop'
        },
        {
            inputs: [
                'ars_nouveau:glyph_amplify',
                '#forge:storage_blocks/gold_brass',
                '#forge:storage_blocks/gold_brass',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/mana'
            ],
            reagent: 'minecraft:diamond_sword',
            output: 'ars_nouveau:enchanters_sword',
            id: 'ars_nouveau:enchanters_sword'
        },
        {
            inputs: [
                '#forge:storage_blocks/gold_brass',
                '#forge:storage_blocks/gold_brass',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/mana'
            ],
            reagent: 'minecraft:shield',
            output: 'ars_nouveau:enchanters_shield',
            id: 'ars_nouveau:enchanters_shield'
        },
        {
            inputs: [
                'ars_nouveau:blaze_fiber',
                'ars_nouveau:blaze_fiber',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold_brass'
            ],
            reagent: 'minecraft:glass_bottle',
            output: 'ars_nouveau:potion_flask',
            id: 'ars_nouveau:potion_flask'
        },
        {
            inputs: [
                'ars_nouveau:glyph_extract',
                'ars_nouveau:glyph_extract',
                '#forge:storage_blocks/gold_brass',
                '#forge:storage_blocks/gold_brass',
                '#forge:rods/blaze',
                '#forge:rods/blaze',
                '#forge:rods/blaze',
                '#forge:rods/blaze'
            ],
            reagent: 'ars_nouveau:potion_jar',
            output: 'ars_nouveau:potion_melder',
            id: 'ars_nouveau:potion_melder'
        },
        {
            inputs: [
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_spike',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_tribute',
                '#forge:ingots/gold_brass'
            ],
            reagent: '#forge:storage_blocks/mana',
            output: 'ars_nouveau:summon_focus',
            id: 'ars_nouveau:summon_focus'
        },
        {
            inputs: [
                '#forge:glass',
                '#forge:glass',
                'ars_nouveau:glyph_self',
                'ars_nouveau:glyph_self',
                '#forge:logs/archwood',
                '#forge:logs/archwood',
                '#forge:ingots/gold_brass',
                '#forge:ingots/gold_brass'
            ],
            reagent: '#forge:storage_blocks/mana',
            output: 'ars_nouveau:enchanters_mirror',
            id: 'ars_nouveau:enchanters_mirror'
        },
        {
            inputs: [
                '#forge:storage_blocks/mana',
                'ars_nouveau:carbuncle_charm',
                '#forge:storage_blocks/mana',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                '#forge:storage_blocks/gold',
                'ars_nouveau:wilden_tribute',
                '#forge:storage_blocks/gold'
            ],
            reagent: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:gold_bee' }).weakNBT(),
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:carbee_bee' }),
            id: `${id_prefix}carbee_jar`
        },
        {
            inputs: [
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: Item.of('minecraft:potion', '{Potion:"ars_nouveau:mana_regen_potion_long"}'),
            output: Item.of('resourcefulbees:mana_honey_bottle', 1),
            id: `${id_prefix}mana_honey_bottle`
        },
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_split','resourcefulbees:carbee_honeycomb_block','resourcefulbees:carbee_honeycomb_block'],
            reagent: 'minecraft:arrow',
            output: Item.of('48x ars_nouveau:split_arrow'),
            id: `${id_prefix}split_arrow`
        },
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_amplify','resourcefulbees:carbee_honeycomb_block','resourcefulbees:carbee_honeycomb_block'],
            reagent: 'minecraft:arrow',
            output: Item.of('48x ars_nouveau:amplify_arrow'),
            id: `${id_prefix}amplify_arrow`
        },
        {
            inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_pierce','resourcefulbees:carbee_honeycomb_block','resourcefulbees:carbee_honeycomb_block'],
            reagent: 'minecraft:arrow',
            output: Item.of('48x ars_nouveau:pierce_arrow'),
            id: `${id_prefix}pierce_arrow`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.ars_nouveau.enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs).id(recipe.id);
    });
});
