<script setup lang="ts">
import { ref } from 'vue';
import TeamsPersonCard from '../../entities/TeamsPersonCard.vue'
import type { IMemberOfTheTeam } from '@/models/IMemberOfTheTeam';


const teams = ref<IMemberOfTheTeam[]>([
    {
        id: 1,
        name: "Лобастова Александра",
        text: "Очень интересные слова от Лобастовой Александры",
        index: '1',
        width: "251.15px",
        height: "251.15px",
        top: "50px",
        img: "https://psv4.userapi.com/c235031/u265644466/docs/d38/ed2ae16102ef/Alexandra_kv.jpg?extra=AdyC6MJpzmettH1tE84phNi0j6iJUGok3D9k5u8xvpBxxaJhb4bpC1k9cHA7KaOjDwEFTcYO8yQtTYr5IB4S12S3YDvFcJ2EFKx40ao97P0YdqCOLCAisUDl7u2V6zZFWBH-KmHsdk8tlw2ssu2rMg4"
    },
    {
        id: 2,
        name: "Хлебников Даниил Андреевич",
        text: "Очень интересные слова от Хлебникова Даниила",
        index: '2',
        width: "282.39px",
        height: "282.39px",
        top: "60px",
        img: "https://psv4.userapi.com/c235031/u265644466/docs/d32/db5f9391a4f3/Daniil_kv.jpg?extra=TtZQJgqvns0-gYB8aSV7W4MqmJuZcIiGbj3QggiwkTWuxPiuTawn_OfxkRGG5U1PvO-elPXfRVWJfXnBk4s4T7cbrcVZRitCdnntf54g_VqgI1s8nkpfbMfHlQBffusohofyhya62gXAC18zJp5gyhk"
    },
    {
        id: 3,
        name: "Максим Александрович Стерхов",
        text: "Очень интересные слова от Максима Александровича",
        index: '3',
        width: "331px",
        height: "331px",
        top: "0",
        img: "https://psv4.userapi.com/c235031/u265644466/docs/d49/96ce9d2fc1a2/Maxim_Alexandrovich_kv.jpg?extra=DGROFygGysrerrD32snHfA9tMg-s-g3kysw-Zoksj6em3qT3E5FDnKtKO0Q7RkAE6aEFMd1Qdv9hnJ60bWxugf6Dn3Zp4WgrTAh7zVVFA6kZyQis_dcEH1zEoQAgDeF1C0A75X2cI5RGGkM4Go-EBH4"
    },
    {
        id: 4,
        name: "Лебедева Ольга Андреевна",
        text: "Очень интересные слова от Лебедевой Ольги",
        index: '1',
        width: "300.31px",
        height: "300.31px",
        top: "50px",
        img: "https://psv4.userapi.com/c235031/u265644466/docs/d8/2417b63b2762/Olga_kv.jpg?extra=4YxunUnuWKghIQJ7kOW4mpx5_Wi1gYlFlo7KZybtZdQ7EH8gFAT-uPsBpvXyP8TNXEAGCeR5Hni3125_SnaNn0br8r3b6sU2J9fTil7GvKXlgePuTsS7stY5tAqovxTS07BYvM8Qzx5Xb8oV41HHw2w"
    },
    {
        id: 5,
        name: "Шакирова Диляра Георгиевна",
        text: "Очень интересные слова от Шакировой Диляры Георгиевны",
        index: '2',
        width: "293.2px",
        height: "293.2px",
        top: "70px",
        img: "https://psv4.userapi.com/c235031/u265644466/docs/d24/f8126dbb904c/Dilyara_kv.jpg?extra=WOWbKHYi87m7RF9kKs-HeIXMEk-HtkyLZ7CZkgavoUwLIX1Y7R0_JQmhfQ3lZfCq2_zsyb3p6uDS8O9pyRz4o3-hymmHJet3y16AufPaQmWiK1H_s-EH0xP3tMEQv1QW1jxDHPMjMrjjBYOhoVccQwQ"
    },
])

const textOfThePeople = ref<string>(teams.value[2].text)

const getText = (peopleText: string) => {
    textOfThePeople.value = peopleText
}
</script>

<template>
    <section class="teams">
        <div class="title__block">
            <h2 class="title">Команда проекта</h2>
        </div>
        <div class="subtitle__block">
            <p class="subtitle">Именно благодаря этим людям ты можеешь включиться во всю внеучебную деятельность в нашем ВУЗе</p>
        </div>
        <div class="teams__gallery">
            <div v-for="people in teams">
                <TeamsPersonCard 
                    :people="people"
                    @get-people-of-the-tems-text="getText" 
                />
            </div>
        </div>
        <div class="text__block">
                <p class="title__text">
                    Тут будет текст от каждого из участника команды, а пока здесь будет рыбный текст
                </p>
                <p class="text">{{ textOfThePeople}}</p>
            </div>
    </section>
</template>

<style scoped lang="scss">
.teams {
    height: 1024px;
    background-color: #7292E5;
    display: flex;
    flex-direction: column;

    .title__block {
        padding-top: 30px;  
    }

    .title {
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 36px;
        text-align: center;
        color: #FFFFFF;
    }

    .subtitle__block {
        width: 910px;
        margin: 21px auto 0;
        .subtitle {
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            text-align: center;
            color: #FFFFFF;
        }
    }

    .teams__gallery {
        display: flex;
        width: 1296px;
        margin: 100px auto 0;
        justify-content: center;
    }

    .text__block {
    width: 1229px;
    height: 254px;
    background: #FFFFFF;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    margin: 67px auto 44px;    
    color: #000;
    font-style: normal; 
    line-height: 36px;


        .title__text {
            font-weight: 700;
            font-size: 24px;
            display: flex;
            align-items: center;
            text-align: center;

            margin: 26px 44px 18px;
        }

        .text {
            font-weight: 500;
            font-size: 18px;
            display: flex;
            align-items: center;
            margin: 0 44px 27px;
            width: 1140px;
        }
    }
}
</style>