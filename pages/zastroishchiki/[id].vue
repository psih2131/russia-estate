<template>
    <main class="main" v-if="developer_data_single && developer_data_single.length > 0">
       {{ developer_data_single[0].title.rendered }}
       {{ route.params.id }}
        
    </main>
    
</template>

<script setup>
//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, computed, watch,   } from 'vue';

const route = useRoute()

const store = useCounterStore()

const { data: developer_data_single } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/zastroyshchiki?slug=${route.params.id}`)

console.log(route.params.id)

console.log('developer_data_single', developer_data_single.value)

// PROPS
const props = defineProps({

})


//METHODS



//HOOKS
onMounted(async () => {

});


</script>

