<template>
    <v-app>
        <Header />
        <v-main>
            <v-container fluid>
                <slot />
            </v-container>
        </v-main>
        <Footer />
        <Progress />
    </v-app>
</template>

<script setup>
    
</script>

<style scoped>
.page-enter-active, .page-leave-active {
    transition: opacity 0.3s;
}

.page-enter, .page-leave-active {
    opacity: 0;
}
.v-main {
    padding-left: 210px;
}
</style>