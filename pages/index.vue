<template>
    <main class="main" v-if="frontpage && frontpage[0]">
      
      <section class="home-hero-sec">
        <div class="container-home">
          <div class="home-hero-sec__data">
            <h1 class="home-hero-sec__title" v-html="frontpage[0].acf.sekcziya_1_hero.zagolovok"></h1>
            <div class="home-hero-sec__subtitle" v-html="frontpage[0].acf.sekcziya_1_hero.opisanie"></div>
           
            <div class="home-hero-sec__number-row" >
              <div class="home-hero-sec__number-element" v-for="(item, index) in frontpage[0].acf.sekcziya_1_hero.czifry" :key="item.index">
                <p class="home-hero-sec__number-element-value" v-html="item.znachenie"></p>
                <p class="home-hero-sec__number-element-text" v-html="item.opisanie"></p>
              </div>
            </div>

          </div>
          <img :src="frontpage[0].acf.sekcziya_1_hero.izobrazhenie.url" :alt="frontpage[0].acf.sekcziya_1_hero.izobrazhenie.alt" class="home-hero-sec__img">
        </div>
      </section>
      

      <section class="home-region-sec">
        <div class="container-home">
          <h2 class="home-region-sec__title">Новостройки по регионам</h2>

          <div class="home-region-sec__wrapper" v-if="popularRegionList?.length > 0">

            <div v-for="(item, index) in popularRegionList" :key="index"
            class="home-region-sec__element region-card" >
              <img :src="item.acf.izobrazhenie.url" :alt="item.acf.izobrazhenie.alt" class="region-card__img">
              <NuxtLink :to="`/novostroyki/region/${item.slug}`" class="region-card__btn">{{ item.name }}</NuxtLink>

              <template v-if="item.count <= 0">
                <div class="region-card__dev-status-wrapper">
                  <div class="region-card__dev-status-element">
                    <div class="region-card__dev-status-element-icon-wrapper">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99985 3.6C11.318 3.6 12.3999 4.68183 12.3999 6V8.4H7.59985V6C7.59985 4.68183 8.68168 3.6 9.99985 3.6ZM13.9999 8.4V6C13.9999 3.79817 12.2017 2 9.99985 2C7.79803 2 5.99985 3.79817 5.99985 6V8.4H5.19985C4.3162 8.4 3.59985 9.11634 3.59985 10V16.4C3.59985 17.2837 4.3162 18 5.19985 18H14.7999C15.6835 18 16.3999 17.2837 16.3999 16.4V10C16.3999 9.11634 15.6835 8.4 14.7999 8.4H13.9999ZM5.19985 10H14.7999V16.4H5.19985V10Z" fill="white"/>
                      </svg>
                    </div>
                    <span class="region-card__dev-status-element-text">
                      В разработке
                    </span>
                  </div>
                </div>
              </template>
            </div>

          </div>
        </div>
      </section>


      <section class="home-popular-sec">
        <div class="container-home">
          <div class="home-popular-sec__header">
            <h2 class="home-popular-sec__title">Cамые популярные обьекты</h2>
            <NuxtLink to="/novostroyki" class="home-popular-sec__btn">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0357 3.66071H13.1786V1.46429C13.1778 1.07625 13.0234 0.70359 12.7488 0.429036C12.475 0.155214 12.1023 0.000732439 11.7143 0H1.46429C1.07625 0.000732439 0.70359 0.154482 0.429036 0.429036C0.154482 0.70359 0.000732439 1.07625 0 1.46429V19.0357C0.000732439 19.4238 0.155214 19.7964 0.429036 20.0702C0.70359 20.3448 1.07625 20.4993 1.46429 20.5H19.0357C19.4238 20.4993 19.7957 20.3448 20.0702 20.0702C20.3448 19.7957 20.4993 19.4238 20.5 19.0357V5.125C20.4993 4.73696 20.3448 4.3643 20.0702 4.08975C19.7964 3.81593 19.4238 3.66145 19.0357 3.66071ZM8.05357 19.0357H5.125V15.375H8.05357V19.0357ZM11.7143 19.0357H9.51786V15.375C9.51713 14.987 9.36264 14.6143 9.08809 14.3405C8.81427 14.0659 8.44161 13.9114 8.05357 13.9107H5.125C4.73696 13.9114 4.3643 14.0659 4.08975 14.3405C3.81593 14.6143 3.66145 14.987 3.66071 15.375V19.0357H1.46429L1.46355 1.46429H11.7143V19.0357ZM19.0357 19.0357H13.1786V5.125H19.0357V19.0357ZM16.8393 10.25C16.8393 10.395 16.7961 10.5363 16.7156 10.6571C16.6358 10.7771 16.5208 10.8709 16.3876 10.9265C16.2536 10.9821 16.1064 10.9961 15.9644 10.9682C15.8223 10.9397 15.692 10.8701 15.5895 10.7676C15.487 10.6651 15.4175 10.5348 15.3889 10.3928C15.3611 10.2507 15.375 10.1036 15.4306 9.96959C15.4863 9.83634 15.58 9.72139 15.7001 9.64159C15.8209 9.56105 15.9622 9.51786 16.1071 9.51786C16.3012 9.51786 16.4879 9.59473 16.6248 9.73238C16.7624 9.86929 16.8393 10.056 16.8393 10.25ZM15.375 7.32143C15.375 7.17646 15.4182 7.03516 15.4987 6.91436C15.5785 6.79429 15.6935 6.70057 15.8267 6.64493C15.9607 6.58929 16.1079 6.57538 16.2499 6.6032C16.3919 6.63175 16.5223 6.7013 16.6248 6.8038C16.7273 6.9063 16.7968 7.03663 16.8254 7.17866C16.8532 7.3207 16.8393 7.46786 16.7836 7.60184C16.728 7.73509 16.6343 7.85004 16.5142 7.92984C16.3934 8.01038 16.2521 8.05357 16.1071 8.05357C15.9131 8.05357 15.7264 7.9767 15.5895 7.83905C15.4519 7.70214 15.375 7.51545 15.375 7.32143ZM9.51786 10.25C9.51786 10.395 9.47466 10.5363 9.39413 10.6571C9.31432 10.7771 9.19938 10.8709 9.06613 10.9265C8.93214 10.9821 8.78498 10.9961 8.64295 10.9682C8.50091 10.9397 8.37059 10.8701 8.26809 10.7676C8.16559 10.6651 8.09604 10.5348 8.06748 10.3928C8.03966 10.2507 8.05357 10.1036 8.10921 9.96959C8.16486 9.83634 8.25857 9.72139 8.37864 9.64159C8.49945 9.56105 8.64075 9.51786 8.78571 9.51786C8.97973 9.51786 9.16643 9.59473 9.30334 9.73238C9.44098 9.86929 9.51786 10.056 9.51786 10.25ZM9.51786 7.32143C9.51786 7.46639 9.47466 7.6077 9.39413 7.7285C9.31432 7.84857 9.19938 7.94229 9.06613 7.99793C8.93214 8.05357 8.78498 8.06748 8.64295 8.03966C8.50091 8.01111 8.37059 7.94155 8.26809 7.83905C8.16559 7.73655 8.09604 7.60623 8.06748 7.4642C8.03966 7.32216 8.05357 7.175 8.10921 7.04102C8.16486 6.90777 8.25857 6.79282 8.37864 6.71302C8.49945 6.63248 8.64075 6.58929 8.78571 6.58929C8.97973 6.58929 9.16643 6.66616 9.30334 6.8038C9.44098 6.94071 9.51786 7.12741 9.51786 7.32143ZM9.51786 4.39286C9.51786 4.53782 9.47466 4.67912 9.39413 4.79993C9.31432 4.92 9.19938 5.01371 9.06613 5.06936C8.93214 5.125 8.78498 5.13891 8.64295 5.11109C8.50091 5.08254 8.37059 5.01298 8.26809 4.91048C8.16559 4.80798 8.09604 4.67766 8.06748 4.53563C8.03966 4.39359 8.05357 4.24643 8.10921 4.11245C8.16486 3.9792 8.25857 3.86425 8.37864 3.78445C8.49945 3.70391 8.64075 3.66071 8.78571 3.66071C8.97973 3.66071 9.16643 3.73759 9.30334 3.87523C9.44098 4.01214 9.51786 4.19884 9.51786 4.39286ZM5.125 10.25C5.125 10.395 5.0818 10.5363 5.00127 10.6571C4.92146 10.7771 4.80652 10.8709 4.67327 10.9265C4.53929 10.9821 4.39212 10.9961 4.25009 10.9682C4.10805 10.9397 3.97773 10.8701 3.87523 10.7676C3.77273 10.6651 3.70318 10.5348 3.67463 10.3928C3.6468 10.2507 3.66071 10.1036 3.71636 9.96959C3.772 9.83634 3.86571 9.72139 3.98579 9.64159C4.10659 9.56105 4.24789 9.51786 4.39286 9.51786C4.58687 9.51786 4.77357 9.59473 4.91048 9.73238C5.04813 9.86929 5.125 10.056 5.125 10.25ZM5.125 7.32143C5.125 7.46639 5.0818 7.6077 5.00127 7.7285C4.92146 7.84857 4.80652 7.94229 4.67327 7.99793C4.53929 8.05357 4.39212 8.06748 4.25009 8.03966C4.10805 8.01111 3.97773 7.94155 3.87523 7.83905C3.77273 7.73655 3.70318 7.60623 3.67463 7.4642C3.6468 7.32216 3.66071 7.175 3.71636 7.04102C3.772 6.90777 3.86571 6.79282 3.98579 6.71302C4.10659 6.63248 4.24789 6.58929 4.39286 6.58929C4.58687 6.58929 4.77357 6.66616 4.91048 6.8038C5.04813 6.94071 5.125 7.12741 5.125 7.32143ZM5.125 4.39286C5.125 4.53782 5.0818 4.67912 5.00127 4.79993C4.92146 4.92 4.80652 5.01371 4.67327 5.06936C4.53929 5.125 4.39212 5.13891 4.25009 5.11109C4.10805 5.08254 3.97773 5.01298 3.87523 4.91048C3.77273 4.80798 3.70318 4.67766 3.67463 4.53563C3.6468 4.39359 3.66071 4.24643 3.71636 4.11245C3.772 3.9792 3.86571 3.86425 3.98579 3.78445C4.10659 3.70391 4.24789 3.66071 4.39286 3.66071C4.58687 3.66071 4.77357 3.73759 4.91048 3.87523C5.04813 4.01214 5.125 4.19884 5.125 4.39286Z" fill="white"/>
              </svg>

              Смотреть все обьекты
            </NuxtLink>
          </div>

          <div class="home-popular-sec__wrapper" v-if="popularPostList?.length > 0">

            <template v-for="item in popularPostList" :key="item">
               <component__object :recObjData="item" :currentClass="all_class" />
            </template>
           
          </div>
        </div>
      </section>


      <section class="home-news-sec">
        <div class="container-home">
          <h2 class="home-news-sec__header">Последние новости недвижимости</h2>
          
        </div>

        <div class="home-news-sec__slider-wrapper">


          <div class="home-news-sec__slider-row">
            
              <swiper-container 
              ref="recomendRef" 
              class="home-post-slider-swiper"
              :pagination="{
              dynamicBullets: true,
              clickable: true
              }"
              >

                  <swiper-slide class="swipe-home-news" v-for="item in recomendNewsList" :key="item">
                          
                      <componentBlogPost :postData="item" :catList="all_categories" />
                      
                  </swiper-slide>


                   <swiper-slide class="swipe-home-news" v-for="item in recomendNewsList" :key="item">
                          
                      <componentBlogPost :postData="item" :catList="all_categories" />
                      
                  </swiper-slide>

                  <!-- <swiper-slide v-for="item in recomendDevelopersList" :key="item">

                      <div class="recomend-slider-developers__wrapper" ref="itemWrappers">
                          
                          <componentDeveloperSmall :mainData="item" />
                      </div>
                      
                  </swiper-slide> -->


              </swiper-container>
              <!-- </ClientOnly> -->

              <div class="home-post-slider-swiper-button-prev swiper-button" @click="swiperRecomend.prev()">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.15429 13.7071C8.53841 13.3166 8.53841 12.6834 8.15429 12.2929L2.94817 7L8.15429 1.70711C8.53841 1.31658 8.53841 0.683417 8.15429 0.292893C7.77017 -0.0976315 7.14738 -0.0976315 6.76326 0.292893L0.861622 6.29289C0.4775 6.68342 0.4775 7.31658 0.861622 7.70711L6.76326 13.7071C7.14738 14.0976 7.77017 14.0976 8.15429 13.7071Z" fill="#5D736E"/>
                  </svg>
              </div>
              <div class="home-post-slider-swiper-button-next swiper-button" @click="swiperRecomend.next()">
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.845709 13.7071C0.461587 13.3166 0.461587 12.6834 0.845709 12.2929L6.05183 7L0.845708 1.70711C0.461586 1.31658 0.461586 0.683417 0.845708 0.292893C1.22983 -0.0976315 1.85262 -0.0976315 2.23674 0.292893L8.13838 6.29289C8.5225 6.68342 8.5225 7.31658 8.13838 7.70711L2.23674 13.7071C1.85262 14.0976 1.22983 14.0976 0.845709 13.7071Z" fill="#5D736E"/>
                  </svg>
              </div>

          </div>

        </div>
      </section>

    </main>
    
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import component__object from '@/components/component__object-recomend-v2.vue'

import componentBlogPost from '@/components/component__blog-post.vue'

//DATA
const store = useCounterStore()

const route = useRoute()

const currentSearchType = ref('personPhone')

const popularRegionList = ref(null)

const popularPostList = ref(null)

const recomendNewsList = ref(null)

const recomendRef = ref(null)

const { data: frontpage } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=home`)

const { data: all_class } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/class_novostrojki`)

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`
)


// получаем рекомендованные регионы
try {
  const mainPost = frontpage.value?.[0]
  const chitatTakzhe = mainPost?.acf['spisok_regionov']

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.slug)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/region?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    popularRegionList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}


// получаем рекомендованные посты
try {
  const mainPost = frontpage.value?.[0]
  const chitatTakzhe = mainPost?.acf?.spisok_populyarnyh_obektov

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/novostrojki?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    popularPostList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}



// получаем рекомендованные посты
try {
  const mainPost = frontpage.value?.[0]
  const chitatTakzhe = mainPost?.acf?.poslednie_novosti

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    recomendNewsList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('frontpage data', frontpage.value)

console.log('popularRegionList data', popularRegionList.value)

console.log('popularPostList data', popularPostList.value)

console.log('recomendNewsList data', recomendNewsList.value)
  


//METHODS 
//recomend gallery
const  swiperRecomend  = useSwiper(recomendRef, {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 30,   
   speed: 700,
   freeMode: "true",  
   freeMode: true,
   slidesPerView: "auto",
  //  centeredSlides: 'auto',
   breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    760: {
     slidesPerView: "auto",
      spaceBetween: 20,
    },
    1220: {
      slidesPerView: "auto",
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



 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })
</script>


<style >

.home-post-slider-swiper::part(container){
  overflow: visible !important;


}

.home-post-slider-swiper{
 transform: translate3d(calc((100% - 1500px) / 2 ), 0px, 0px);

}

.home-post-slider-swiper::part(pagination) {
  bottom: 10px; /* если нужно сместить пагинацию */
}

.home-post-slider-swiper::part(bullet) {
  background-color:rgba(255, 255, 255, 0.67);
  opacity: 1;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  transition: background-color 0.3s;
  cursor: pointer;
}

.home-post-slider-swiper::part(bullet-active) {
  background-color: #fff;
  width: 10px;
  height: 10px;
}

</style>