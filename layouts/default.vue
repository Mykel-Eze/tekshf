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
    
    let scrollPosition = 0;
    
    const elemsModal = document.querySelectorAll('.modal');
    const modals = M.Modal.init(elemsModal, {
        preventScrolling: true,
        onOpenStart: () => {
            // Save the current scroll position
            scrollPosition = window.scrollY;
            // Apply fixed positioning to prevent scrolling
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPosition}px`;
            document.body.style.width = '100%';
        },
        onCloseEnd: () => {
            // Remove the fixed positioning
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            // Immediately set the scroll position without animation
            window.scrollTo({
                top: scrollPosition,
                behavior: 'auto' // Use 'auto' instead of 'smooth' to avoid animation
            });
        },
    });
});
</script>

<style>

</style>