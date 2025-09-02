<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="container">
                <div class="footer__about">
                    <NuxtLink class="footer__logo" to="/">
                        <img src="@/assets/images/logo-pc.png" alt="" class="footer__logo-img">
                    </NuxtLink>
                    <p class="footer__text-about">“Russia Estate” это многофункциональный сервис, на страницах нашего портала вы сможете проверить как строиться интересующий вас комплекс на текущий момент, не является ли стройка проблемной, коих ...</p>
                </div>

                <div class="footer__claster">
                    <p class="footer__claster-title">Навигация</p>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list">
                            <li class="footer__nav-list-element">
                                <NuxtLink to="/" class="footer__nav-list-element-link">Главная</NuxtLink>
                            </li>

                            <li class="footer__nav-list-element">
                                <NuxtLink to="/novostroyki" class="footer__nav-list-element-link">Новостройки</NuxtLink>
                            </li>

                            <li class="footer__nav-list-element">
                                <NuxtLink to="/zastroishchiki" class="footer__nav-list-element-link">Застройщики</NuxtLink>
                            </li>

                            <li class="footer__nav-list-element">
                                <NuxtLink to="/blog" class="footer__nav-list-element-link">Новости недвижимости</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="footer__claster">
                    <p class="footer__claster-title">Города</p>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list">
                            <li class="footer__nav-list-element">
                                <NuxtLink to="/novostroyki/region/moskva-i-obl" class="footer__nav-list-element-link">Новостройки Москвы</NuxtLink>
                            </li>

                            <li class="footer__nav-list-element">
                                <NuxtLink to="/novostroyki/region/piter-i-len-obl" class="footer__nav-list-element-link">Новостройки Питера</NuxtLink>
                            </li>

                            <!-- <li class="footer__nav-list-element">
                                <NuxtLink class="footer__nav-list-element-link">Новостройки Краснодар</NuxtLink>
                            </li>

                            <li class="footer__nav-list-element">
                                <NuxtLink class="footer__nav-list-element-link">Новостройки ЛНР</NuxtLink>
                            </li> -->
                        </ul>
                    </nav>
                </div>

                <div class="footer__claster footer__claster--dev">
                    <p class="footer__claster-title">В разработке</p>
                    <nav class="footer__nav">
                        <ul class="footer__nav-list">
                            <li class="footer__nav-list-element">
                                Земельные участки
                            </li>

                            <li class="footer__nav-list-element">
                                Частный сектор
                            </li>

                            <li class="footer__nav-list-element">
                                Комерция
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="footer__claster footer__claster--coop">
                    <p class="footer__claster-title">Сотрудничество</p>
                    <div class="footer__cooperation-text">По всем вопросам сотрудничества писать сюда: <a href="">test@gmail.com</a></div>
                </div>

            </div>
        </div>
        <div class="footer__down">
            <div class="container">
                <nav class="footer__doc-nav">
                    <ul class="footer__doc-nav-list">
                        <li class="footer__doc-nav-list-element">
                            <NuxtLink to="" class="footer__doc-nav-link">Политика конфиденциальности</NuxtLink>
                        </li>

                        <li class="footer__doc-nav-list-element">
                            <NuxtLink to="" class="footer__doc-nav-link">Обработка персональных данных</NuxtLink>
                        </li>

                        <li class="footer__doc-nav-list-element">
                            <NuxtLink to="" class="footer__doc-nav-link">Политика cookie</NuxtLink>
                        </li>

                        <li class="footer__doc-nav-list-element">
                            <NuxtLink to="" class="footer__doc-nav-link">Пользывательское соглашение</NuxtLink>
                        </li>
                    </ul>
                </nav>

                <p class="footer__developer">
                    Разработка: <a href="">Roman Kuzmuch</a>
                </p>
            </div>
        </div>
    </footer>
    
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter'
    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    // import component__user_panel from '@/components/user-panel.vue'

</script>