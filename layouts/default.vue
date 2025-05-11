<template>
    <div id="app-wrapper">
        <Navbar />
            <main id="main-contents-wrapper">
                <slot />
            </main>
        <Footer />

        <GetStartedModal />
    </div>
</template>

<script lang="ts" setup>
import M from 'materialize-css';

onMounted(() => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav.main-nav');
        if (nav) {
            nav.classList.toggle('scrolled-nav', window.scrollY > 50);
        }
    });
    
    const elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal, {
        preventScrolling: true,
    });
});
</script>

<style>

</style>