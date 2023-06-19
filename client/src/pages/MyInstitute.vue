<script setup lang="ts">
import { ref } from 'vue';
import TeamsPersonCard from '@/entities/TeamsPersonCard.vue';

const person = ref({
    director: "https://f-isc.udsu.ru/cache/Image/2949@boss-002949-%D0%91%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0%20%D0%9B.%D0%92..jpg",
    depDir: "https://sun9-51.userapi.com/impg/Ww3rqV0qdtnzV_N8bAjPHdB4Rs0d4Yz7IfvPFA/u7lmgufL-_Q.jpg?size=744x644&quality=95&sign=6b7a101ddddf99f9b87940211d6b422d&type=album",
    chairman: "https://skrinshoter.ru/i/090623/ZfDAUWQL.png?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82%2009-06-2023%2018:06:27.png"
})
</script>

<template>
    <section class="my-institute">
        <div class="container">
            <div class="title__block">
                <img  class="img" src="https://f-isc.udsu.ru/files/logo.png"/>
                <h2 class="title">ИНСТИТУТ СОЦИАЛЬНЫХ КОМУНИКАЦИЙ</h2>
                <div class="info__block">
                    <p class="info">Невероятно интересеная информация про ИСК. 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio non autem quibusdam voluptate sit maiores molestias laboriosam magnam enim, sunt mollitia fugit deleniti voluptatum, animi aut assumenda. Dolor, odit voluptatem.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse inventore soluta doloremque velit praesentium, eos assumenda ipsum quidem suscipit labore laborum harum placeat odit voluptate exercitationem, fugiat aliquid magnam at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores magnam aut optio beatae facere inventore, esse nam laboriosam quos voluptatum, illum quis vel quia libero eligendi. Eaque, iste explicabo.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos unde hic modi distinctio dicta. Veniam explicabo ducimus vel expedita cumque, ipsam distinctio, minima a autem rerum qui quis iusto.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat sunt voluptate esse dolorum omnis, consequatur harum cupiditate non quo quaerat molestiae accusantium cumque quod impedit dignissimos placeat numquam assumenda animi?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus cum quaerat enim voluptate! Temporibus animi, quas mollitia unde placeat illo iusto quia eum, sit dicta a doloremque facere ipsa?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos deleniti praesentium id inventore laborum, nobis, magni atque neque impedit nam ratione iure modi repudiandae est. Illum nesciunt facere delectus.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, nostrum! Delectus voluptas enim, hic repellendus pariatur nihil culpa, blanditiis quaerat, amet corrupti maxime fuga quam. Provident, ullam maxime. Doloribus, quae?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui asperiores, placeat mollitia ratione nulla. Laboriosam dolor suscipit ullam aut ut, ad, ducimus omnis itaque quisquam sequi quo, earum similique.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, beatae vero. Inventore, assumenda fugiat! Incidunt possimus atque vel porro architecto ad iste molestias quidem laborum iure repellat, itaque ab deserunt?
                    </p>
                </div>
            </div>
            <div class="director__block">
                <TeamsPersonCard :person="person.director"/>
                <div class="director__info">
                    <div class="name__block">
                        <h3 class="name">Баталова Лариса Вячеславовна</h3>
                        <h3 class="job-title">директор института</h3>
                        <p>Очень интересные приветственные слова от Ларисы Вячеславовны! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla suscipit maiores minus similique dolorem facilis! Iure velit, recusandae libero eligendi ipsa sapiente maiores iusto beatae incidunt odit enim exercitationem. Quas.</p>
                    </div>
                </div>
            </div>
            <div class="director__block">
                <div class="director__info">
                    <div class="name__block">
                        <h3 class="name">Анна Михайловна Мерзлякова</h3>
                        <h3 class="job-title">заместитель директора по внеучнобно-воспитательной работе</h3>
                        <p>Очень интересные приветственные слова от Анны Михайловны! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla suscipit maiores minus similique dolorem facilis! Iure velit, recusandae libero eligendi ipsa sapiente maiores iusto beatae incidunt odit enim exercitationem. Quas.</p>
                    </div>
                </div>
                <TeamsPersonCard :person="person.depDir"/>
            </div>
            <div class="director__block">
                <TeamsPersonCard :person="person.chairman"/>
                <div class="director__info">
                    <div class="name__block">
                        <h3 class="name">Мозгина Дарья</h3>
                        <h3 class="job-title">председатель студенческого совета</h3>
                        <p>Очень интересные приветственные слова от Даши! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla suscipit maiores minus similique dolorem facilis! Iure velit, recusandae libero eligendi ipsa sapiente maiores iusto beatae incidunt odit enim exercitationem. Quas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.my-institute {
    height: fit-content;
    margin: 40px 0;

    .container {
        width: 800px;
        margin: 0 auto;

        .job-title {
            font-size: 14px;
            font-weight: 700;
        }

        .director__block {
            display: flex;
            margin-top: 20px;

            .director__info {
                margin: 0 40px;
                width: 500px;

                .name__block {
                    width: 100%;
                }

                .name {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                }
            }
        }

        .title__block {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .img {
                width: 200px;
            }

            .title {
                font-style: normal;
                font-size: 25px;
                font-weight: 900;
                text-align: center;
                margin-top: 20px;
            }

            .info__block {
                width: 700px;
            }
        }
    }
}
</style>