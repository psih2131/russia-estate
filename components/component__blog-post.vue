<template>
    <div :class="`blog-post ${classComponent}`">
        <NuxtLink :to="`/blog/${postData.slug}`" class="blog-post__image-wrapper">
            <img :src="postData.acf.izobrazhenie.url" :alt="postData.acf.izobrazhenie.alt" class="blog-post__image">
        </NuxtLink>
            
        <p class="blog-post__date">{{formatDateToRussian(postData.date)}}</p>
        <div class="blog-post__header">
            <p class="blog-post__title" v-html="postData.title.rendered"></p>

            <NuxtLink :to="`/blog/${postData.slug}`" class="blog-post__link-ar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 7C8 6.44772 8.44772 6 9 6L17 6C17.5523 6 18 6.44772 18 7V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8L9 8C8.44772 8 8 7.55228 8 7Z"
                        fill="#85D2A9" />
                </svg>
            </NuxtLink>

        </div>

        <p class="blog-post__subtitle" v-html="postData.acf.korotkoe_opisanie"></p>

        <div class="blog-post__teg-row">

            <template v-if="postData['blog-category'] && catList && catList.length > 0">
                <NuxtLink v-for="item in postData['blog-category']" :key="item"  class="blog-post__teg" :to="`/blog/categories/${currentCatSlug(item)}`">#{{ curentCatTitle(item) }}</NuxtLink>
            </template>
        </div>

    </div>
</template>


<script setup>
//IMPORT STORE
// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';




 // props
 const props = defineProps({
    postData: Object,
    catList: Object,
    classComponent: String,
})



//DATA




//METHODS 

//date convertor
function formatDateToRussian(dateString) {
    const date = new Date(dateString);
    
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

//get current cat title
function curentCatTitle(itemID){
    let element = props.catList.find(u => u.id === +itemID)

    return element.name
}

//get current cat slug
function currentCatSlug(itemID){
    let element = props.catList.find(u => u.id === +itemID)

    return element.slug
}


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
  
  
});

onBeforeUnmount(() => {

});




</script>
