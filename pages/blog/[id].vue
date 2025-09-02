<template>

<section class="post-sec">
    <div class="post-sec__container">
        <p class="post-sec__date">{{formatDateToRussian(object_data_single[0].date)}}</p>
        <h1 class="post-sec__title" v-html="object_data_single[0].title.rendered"></h1>
        <p class="post-sec__subtitle" v-html="object_data_single[0].acf.korotkoe_opisanie"></p>
    </div>
    <img :src="object_data_single[0].acf.bolshoe_izobrazhenie_posta.url" :alt="object_data_single[0].acf.bolshoe_izobrazhenie_posta.alt" class="post-sec__img">

    <div class="post-sec__container">
        <div class="post-sec__wp-editor-post wp-editor-post" v-html="object_data_single[0].acf.soderzhanie_posta">
            
        </div>

        <div class="post-sec__teg-wrapper">
            <template v-if="object_data_single[0]['blog-category'] && all_categories && all_categories.length > 0">
                <NuxtLink v-for="item in object_data_single[0]['blog-category']" :key="item"  class="blog-post__teg" :to="`/blog/categories/${currentCatSlug(item)}`">#{{ curentCatTitle(item) }}</NuxtLink>
            </template>
        </div>
        <div class="post-sec__back-ar">

            <NuxtLink to="/blog" class="post-sec__btn-ar-back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3 14C3 13.4477 3.44772 13 4 13L16 13C17.6569 13 19 11.6569 19 10L19 6C19 5.44771 19.4477 5 20 5C20.5523 5 21 5.44771 21 6L21 10C21 12.7614 18.7614 15 16 15L4 15C3.44772 15 3 14.5523 3 14Z"
                        fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M3.29289 14.7071C2.90237 14.3166 2.90237 13.6834 3.29289 13.2929L7.29289 9.29289C7.68342 8.90237 8.31658 8.90237 8.70711 9.29289C9.09763 9.68342 9.09763 10.3166 8.70711 10.7071L5.41421 14L8.70711 17.2929C9.09763 17.6834 9.09763 18.3166 8.70711 18.7071C8.31658 19.0976 7.68342 19.0976 7.29289 18.7071L3.29289 14.7071Z"
                        fill="white" />
                </svg>
                Вернутся ко всем постам
            </NuxtLink>

        </div>
    </div>
</section>


<section class="reccoment-post-sec">
    <div class="blog-sec__wrapper">
        <h2 class="reccoment-post-sec__title">Похожие посты</h2>

        <div class="reccoment-post-sec__slider-row">
            
            
            <swiper-container 
            ref="recomendRef" 
            class="post-slider-swiper"
            :pagination="{
            dynamicBullets: true,
            clickable: true
            }"
            >

                <swiper-slide v-for="item in recomendDevelopersList" :key="item">
                        
                    <componentBlogPost :postData="item" :catList="all_categories" />
                    
                </swiper-slide>

                <!-- <swiper-slide v-for="item in recomendDevelopersList" :key="item">

                    <div class="recomend-slider-developers__wrapper" ref="itemWrappers">
                        
                        <componentDeveloperSmall :mainData="item" />
                    </div>
                    
                </swiper-slide> -->


            </swiper-container>
            <!-- </ClientOnly> -->

            <div class="swiper-button-prev swiper-button" @click="swiperRecomend.prev()">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                </svg>
            </div>
            <div class="swiper-button-next swiper-button" @click="swiperRecomend.next()">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.845709 13.7071C0.461587 13.3166 0.461587 12.6834 0.845709 12.2929L6.05183 7L0.845708 1.70711C0.461586 1.31658 0.461586 0.683417 0.845708 0.292893C1.22983 -0.0976315 1.85262 -0.0976315 2.23674 0.292893L8.13838 6.29289C8.5225 6.68342 8.5225 7.31658 8.13838 7.70711L2.23674 13.7071C1.85262 14.0976 1.22983 14.0976 0.845709 13.7071Z" fill="#5D736E"/>
                </svg>
            </div>

        </div>
    </div>
</section>

</template>



<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import componentBlogPost from '@/components/component__blog-post.vue'





//DATA
const route = useRoute()

const store = useCounterStore()

const recomendPostsList = ref([])

const recomendRef = ref(null)

const recomendDevelopersList = ref([])

// основной пост
const { data: object_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?slug=${route.params.id}`,
  { key: `post-${route.params.id}` }
)

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`
)

// получаем рекомендованные посты
try {
  const mainPost = object_data_single.value?.[0]
  const chitatTakzhe = mainPost?.acf?.chitat_takzhe

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    recomendPostsList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}


//get recomend developers list
if (object_data_single.value && object_data_single.value[0]?.acf?.rekomenduemye_posty?.length) {

  const slugs = object_data_single.value[0].acf.rekomenduemye_posty.map(obj => obj.post_name)

  const promises = slugs.map(slug =>
    useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?slug=${slug}`, {
      key: `post-${slug}`
    }).then(r => r.data.value?.[0] || null)
  )

  recomendDevelopersList.value = await Promise.all(promises)
}


console.log('recomendPostsList.value', recomendPostsList)
console.log('object_data_single', object_data_single)
console.log('all_categories', all_categories)

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
    let element = all_categories.value.find(u => u.id === +itemID)

    return element.name
}

//get current cat slug
function currentCatSlug(itemID){
    let element = all_categories.value.find(u => u.id === +itemID)

    return element.slug
}


//recomend gallery
const  swiperRecomend  = useSwiper(recomendRef, {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,   
   speed: 700,
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1220: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
})







//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



//SEO
// useHead({
//     title: object_data_single.value[0].acf.seo_title || object_data_single.value[0].title.rendered,
//     meta: [
//         // Description
//         { name: 'description', content: object_data_single.value[0].acf.seo_description || 'Описание по умолчанию' },

//         // Keywords (опционально, не влияет сильно на SEO)
//         { name: 'keywords',  content: object_data_single.value[0].acf.klyuchevaya_fraza || 'test' },

//         // OpenGraph
//         { property: 'og:title', content: object_data_single.value[0].acf.seo_title },
//         { property: 'og:description', content: object_data_single.value[0].acf.seo_description },
//         { property: 'og:type', content: 'website' },
//         { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
//         { property: 'og:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

//         // Twitter Card (если используешь)
//         { name: 'twitter:card', content: 'summary_large_image' },
//         { name: 'twitter:title', content: object_data_single.value[0].acf.seo_title },
//         { name: 'twitter:description', content: object_data_single.value[0].acf.seo_description },
//         { name: 'twitter:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

//         // Индексация / Деиндексация
//         // Например, noindex для черновика:
//         {
//         name: 'robots',
//         content:
//             object_data_single.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
//             ? 'index, follow'
//             : 'noindex, nofollow'
//         }
//     ],
//     link: [
//         // Canonical (вручную или динамически)
//         { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/posts/${object_data_single.value[0].acf.canonical || route.params.id}` }
//     ]
// })
</script>


