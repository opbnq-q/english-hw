
<script setup lang="ts">
import Column from '~/components/Column.vue';
import Subtitle from '~/components/Subtitle.vue';
import Text from '~/components/Text.vue';
import Title from '~/components/Title.vue';
</script>

<template>
    <Column :date="'10.10.10'"
        image="https://i.ibb.co/9w3tPpJ/podelki-iz-musora-17.webp" title="The World of Trash Art" :comments="[{
        author: 'TrashMaster3000',
        content: 'Wow, this bomber idea is lit! 💣 Gonna try something like this myself. #RecycleAndRule',
        avatar: 'https://i.ibb.co/Gx3BbSn/1.jpg'
    },
    {
        author: 'ArtistaBasura',
        content: '¡Esto es arte puro! Nunca pensé que la basura podría convertirse en algo tan creativo. ¡Bravo!',
        avatar: 'https://i.ibb.co/ZNkLGBG/2.jpg'
    },
    {
        author: 'Jean-Claude Déchet',
        content: 'Incroyable! Je vais essayer de faire un avion avec des bouteilles en plastique aussi. Vive le recyclage!',
        avatar: 'https://i.ibb.co/NFxpXLp/3.jpg'
    },
    {
        author: 'Мусорный Творец',
        content: 'Это гениально! Я уже сделал собаку из старых бутылок. Твой бомбардировщик будет в топе!',
        avatar: 'https://i.ibb.co/h2xgHmF/IMG-20241024-101327-112.jpg'
    },
    {
        author: 'EcoNerd42',
        content: 'This is such a creative way to reduce waste! 🚮 Can\'t wait to see how the bomber turns out.',
        avatar: 'https://i.ibb.co/SKqNRPY/IMG-20241024-101536-716.jpg'
    }]">
        
        <Subtitle>What We Love About Trash Art</Subtitle>
        <Text>
            Lately, we've been diving into a fascinating new hobby – trash art, which is all about creating crafts from discarded materials. What we love most about it is how it turns something usually seen as waste into something imaginative and useful. Plus, there's a certain pleasure in cleaning up our environment. In our building, not so well neighbors usually leave different types of trash, like paper and food scraps, in the common areas. So, by collecting it, we’re not only crafting but also doing a little good gesture for the community.
        </Text>

        <Subtitle>A Trash Bomber</Subtitle>
        <Text>
            Currently, we're excited about the idea of building a bomber plane model using trash. It's our first project, so we’re still learning the ropes, and while we haven’t started just yet, the plan is taking shape in our minds.
        </Text>

        <Subtitle>When And How</Subtitle>
        <Text>
            Trash art can be done anytime, anywhere. All you need is a creative mindset and a readiness to see potential in what others consider garbage. The challenge, though, is pushing yourself to take that first step – collecting the materials and committing to the project. Once you get past that, the possibilities are endless!
        </Text>

        <Subtitle>Why You Should Try It</Subtitle>
        <Text>
            We'd recommend trash art to everyone. It’s a memorable, one of a kind experience that stays with you, and it’s surprisingly fun! Whether you're a beginner like us or have some experience, it’s a great way to unleash your creativity while helping the planet.
        </Text>
    </Column>
</template>

