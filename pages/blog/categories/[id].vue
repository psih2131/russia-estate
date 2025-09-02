<template>
    <main class="main">
        <section class="blog-sec">

            <div class="blog-sec__wrapper">
                <h1 class="blog-sec__title" v-if="current_category && current_category[0]">{{current_category[0].name}}</h1>
                <p class="blog-sec__subtitle">Все самое нужное, чтобы сделать важный выбор на основе детальной
                    информации из проверенного источника, которая обновляется ежедневно.</p>

                <nav class="blog-sec__nav">
                    <ul class="blog-sec__nav-ul">
                        
                        <li class="blog-sec__nav-li">
                            <NuxtLink to="/blog/" class="blog-sec__nav-link"  >
                                Все посты
                            </NuxtLink>
                        </li>

                        <template v-if="all_categories">
                            <li class="blog-sec__nav-li" v-for="item in all_categories" :key="item">
                                <NuxtLink :to="`/blog/categories/${item.slug}/`" class="blog-sec__nav-link"  activeClass="blog-sec__nav-link--activ">
                                    {{item.name}}
                                </NuxtLink>
                            </li>
                        </template>

                    </ul>
                </nav>

                <div class="blog-sec__post-container">


                    <template v-if="all_object && all_categories && all_object.length > 0">

                        <componentBlogPost v-for="(item, index) in all_object" :key="index" :postData="item" :catList="all_categories" :classComponent="'blog-sec__post'"/>

                    </template>

                    <template v-else>
                        <div class="blog-sec__body-no-posts no-posts-box">
                            <p class="no-posts-box__title">упс!</p>
                            <p class="no-posts-box__subtitle">По запросу ничего не найдено</p>
                            <!-- <div class="no-posts-box__img-wrapper">
                                <img src="@/assets/images/img/do-posts.png" alt="">
                            </div> -->
                        </div>
                    </template>

                </div>


                <div class="pagination-wrapper pagination-wrapper--blog" v-if="all_object && all_categories && all_object.length > 0">
                    <div class="pagination">


                        <a  class="prev page-numbers" @click="prevPage()" v-if="currentPage > 1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7071 18.7071C15.0976 18.3166 15.0976 17.6834 14.7071 17.2929L9.41421 12L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L13.2929 18.7071C13.6834 19.0976 14.3166 19.0976 14.7071 18.7071Z" fill="#1C274C" fill-opacity="0.6"/>
                            </svg>
                        </a>

                        <ul class="pagination__num-list">
                            <li class="pagination__nam-li " v-for="(item, index) in totalPages" :key="index" :class="{'pagination__nam-li--activ' : item == currentPage }">
                            
                                <NuxtLink :to="`/blog/categories/${route.params.id}/?page=${item}`" class="page-numbers">
                                    {{ item }}
                                </NuxtLink>

                            </li>

                        </ul>
                        <a  class="next page-numbers" @click="nextPage()" v-if="currentPage < totalPages">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z" fill="#1C274C" fill-opacity="0.6"/>
                            </svg>
                        </a>
                            
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import componentBlogPost from '@/components/component__blog-post.vue'


//DATA
const store = useCounterStore()

const route = useRoute()

const router = useRouter()

const currentPage = ref(route.query.page || 1)

const perPage = ref(9)

const totalPages = ref(null)

// const { data: all_object } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog`)

const { data: current_category } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category?slug=${route.params.id}`)


const { data: all_object, error, pending } = await useFetch(
    `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?blog-category=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`, {
    onResponse({ response }) {
      const total = response.headers.get('X-WP-Total')
      const pages = response.headers.get('X-WP-TotalPages')
      
      if (pages) totalPages.value = Number(pages)
      
      console.log('X-WP-Total', total)
      console.log('X-WP-TotalPages', pages)
    },
})

const { data: all_categories } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`)

console.log('current_category', current_category)

console.log('all_object',all_object)

console.log('all_categories', all_categories)






//METHODS 

//get posts on client side
async function fetchClientData() {
  const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?blog-category=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
  const data = await res.json()
  all_object.value = data

  const pages = res.headers.get('X-WP-TotalPages')
  if (pages) totalPages.value = Number(pages)
}


//next pagin page
function nextPage(){
    if(currentPage.value >= totalPages.value){

    }
    else{
        router.push({
            path: `/blog/categories/${route.params.id}/`,
            query: { page: +currentPage.value + 1 }
        })
    }
}

function prevPage(){
    if(currentPage.value <= 1){

    }
    else{
        router.push({
            path: `/blog/categories/${route.params.id}/`,
            query: { page: +currentPage.value - 1 }
        })
    }
}





//HOOKS
onMounted(async () => {
    const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?blog-category=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
    const pages = res.headers.get('X-WP-TotalPages')
    if (pages) totalPages.value = Number(pages)


    console.log('route',route.query.page)
})



watch(() => route.query.page, async (newPage) => {
    console.log('gg', route.query.page)
    currentPage.value = route.query.page
    fetchClientData()
})


onBeforeUnmount(() => {

});




  //SEO
// watchEffect(() => {

// useHead({
//     title: current_category.value[0].acf.seo_title,
//     meta: [
//         // Description
//         { name: 'description', content: current_category.value[0].acf.seo_description  || 'Описание по умолчанию' },

//         // Keywords (опционально, не влияет сильно на SEO)
//         { name: 'keywords',  content: current_category.value[0].acf.klyuchevaya_fraza || 'test' },

//         // OpenGraph
//         { property: 'og:title', content: current_category.value[0].acf.seo_title },
//         { property: 'og:description', content: current_category.value[0].acf.seo_description },
//         { property: 'og:type', content: 'website' },
//         { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
//         { property: 'og:image', content: current_category.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

//         // Twitter Card (если используешь)
//         { name: 'twitter:card', content: 'summary_large_image' },
//         { name: 'twitter:title', content: current_category.value[0].acf.seo_title },
//         { name: 'twitter:description', content: current_category.value[0].acf.seo_description },
//         { name: 'twitter:image', content: current_category.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

//         // Индексация / Деиндексация
//         // Например, noindex для черновика:
//         {
//         name: 'robots',
//         content:
//             current_category.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
//             ? 'index, follow'
//             : 'noindex, nofollow'
//         }
//     ],
//     link: [
//         // Canonical (вручную или динамически)
//         { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/categories/${current_category.value[0].acf.canonical || route.params.id}` }
//     ]
// })


// })




</script>