<template>
    <div>
        <div class="fixed bottom-0 w-full bg-zinc-800 text-white py-5">
            <div class="container mx-auto px-2">
                <h1 class="capitalize text-xl">{{ date }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const date = ref(new Date().getFullYear())
        return { date }
    }
}
</script>
