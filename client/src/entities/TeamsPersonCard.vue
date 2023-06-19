<script setup lang="ts">
/*import { ref } from 'vue';
import type { IMemberOfTheTeam } from '@/models/IMemberOfTheTeam';

const props = defineProps<({
    people: IMemberOfTheTeam,
})>()

const peopleText = ref<string>(props.people.text)
defineEmits(['getPeopleOfTheTemsText'])

const img = ref<string>(props.people.img)

*/

defineProps({
    person: String
})
</script>

<template>
    <div class="widow"></div>
    <!--<button
        @click="$emit('getPeopleOfTheTemsText', peopleText)"
        class="avatar" 
        :style="{width: people.width, height: people.height, zIndex: people.index, top: people.top}"
    >
        <img :src="props.people.img" :alt="people.name" class="img"/>
    </button>-->
    <div class="img__block">
        <img :src="person" class="img"/>
    </div>
</template>

<style scoped lang="scss">

.widow{
    width: 289.23px;
    height: 80px;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 5px 36px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(9.5px);
    border-radius: 19px;
    transform: rotate(2.18deg);
    display: none;
    position: relative;
}

.img__block {
    border-radius: 50%;
    width: 250px;
    border: 11px solid #9489F2
}

.avatar {
    position: relative;
    margin: 0 -30px ;
    background-color: #E2E8F0;
    border-radius: 50%;
    border: 11px solid #FFFFFF;
    cursor: pointer;
}

.img {
    width: 100%;
    height: 220px;
    border-radius: 50%;
}

.avatar:focus{
    border: 11px solid #9489F2;
}
</style>