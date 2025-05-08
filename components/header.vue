<template>
    <header class="header">
        <div class="container">
            <a href="/" class="header__logo">
                <img src="@/assets/images/logo-pc.png" alt="" class="header__logo-img">
            </a>

            <nav class="header__nav">
                <ul class="header__nav-ul">
                    <li class="header__nav-list ">
                        <NuxtLink class="header__nav-link" to="/novostroyki">Новостройки</NuxtLink>
                    </li>

                    <li class="header__nav-list">
                        <NuxtLink class="header__nav-link" to="/zastroishchiki">Застройщики</NuxtLink>
                    </li>

                    <li class="header__nav-list">
                        <a href="" class="header__nav-link">Коммерция</a>
                    </li>

                    <li class="header__nav-list">
                        <a href="" class="header__nav-link">Земельные участки</a>
                    </li>

                    <li class="header__nav-list">
                        <a href="" class="header__nav-link">Новости недвижимости</a>
                    </li>
                </ul>
            </nav>

            <div class="header__icons-row">
                <a href="" class="header__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2082_113)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.095 18.3375C5.37749 18.3375 1.55326 14.58 1.55326 9.9375C1.55326 5.295 5.37749 1.53003 10.095 1.53003C14.8125 1.53003 18.6375 5.295 18.6375 9.9375C18.6375 14.58 14.8125 18.3375 10.095 18.3375ZM23.766 22.6875L17.5717 16.59C19.1932 14.8275 20.19 12.5025 20.19 9.9375C20.19 4.4475 15.6705 0 10.095 0C4.51949 0 0 4.4475 0 9.9375C0 15.42 4.51949 19.8675 10.095 19.8675C12.504 19.8675 14.7135 19.035 16.449 17.6475L22.668 23.7675C22.9717 24.0675 23.463 24.0675 23.766 23.7675C24.0697 23.475 24.0697 22.9875 23.766 22.6875Z" fill="#1C274C"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2082_113">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>

                <a href="" class="header__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z" fill="#1C274C"/>
                    </svg>    
                </a>
            </div>


            <div class="header__btn-wrapper">
                <button class="btn-v1">Подобрать недвижимость</button>
            </div>

        </div>
    </header>
    
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter'
    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    // import component__user_panel from '@/components/user-panel.vue'

    //DATA
    const currentSearchType = ref('personPhone')



    //METHODS 



    function validSearch(){


    }







    //HOOKS
    onMounted(() => {
    // Добавляем обработчик события scroll


    });

    onBeforeUnmount(() => {

    });



    // props
    const props = defineProps({
    //   mainData: Object,
        // postAllCategory: Object,
    })
</script>