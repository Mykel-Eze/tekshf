<template>
    <section id="faq" class="scrollspy">
        <div class="row full-height">
            <div class="container full-height">
                <div class="faq-content-wrapper">
                    <div class="faq-title-side">
                        <div class="section-label mag-0">FAQ</div>
                        <h1 class="section-title mt-[12px] mb-[24px]">Frequently Asked Questions</h1>
                    </div>

                    <div class="faq-accordion-wrapper">
                        <ul class="collapsible">
                            <li class="active">
                                <div class="collapsible-header flex justify-between">
                                    <span>What is Tekshf?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Tekshf is your AI-powered travel companion dedicated to making your AFCON
                                    Morocco 2025 journey effortless and memorable. By combining cutting-edge
                                    technology with local insights, we help you navigate visa processes, book
                                    flights, and curate personalized itineraries; all while giving you exclusive
                                    access to Morocco’s hidden gems.
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header flex justify-between">
                                    <span>How does Tekshf work?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Tekshf uses advanced AI algorithms to analyze your preferences and travel needs.
                                    It then provides tailored recommendations, assists with bookings, and offers
                                    real-time support to ensure a seamless travel experience.
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header flex justify-between">
                                    <span>Is Tekshf free to use?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Tekshf offers both free and premium plans. The free plan includes basic features,
                                    while the premium plan unlocks advanced functionalities like personalized itineraries
                                    and priority support.
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header flex justify-between">
                                    <span>Can Tekshf help with visa applications?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Yes, Tekshf provides guidance on visa requirements and assists with the application
                                    process by offering step-by-step instructions and necessary documentation checklists.
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header flex justify-between">
                                    <span>Does Tekshf support group travel planning?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Absolutely! Tekshf allows you to plan group trips by coordinating itineraries,
                                    sharing travel plans, and managing bookings for multiple travelers.
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header flex justify-between">
                                    <span>What makes Tekshf unique?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Tekshf stands out by combining AI technology with local expertise to deliver
                                    personalized travel experiences. It goes beyond standard travel apps by uncovering
                                    hidden gems and providing real-time assistance throughout your journey.
                                </div>
                            </li>
                            <li>
                                <div class="collapsible-header flex justify-between">
                                    <span>Is Tekshf available in other countries?</span>
                                    <img src="~/assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <div class="collapsible-body">
                                    Currently, Tekshf is focused on AFCON Morocco 2025, but we plan to expand to other
                                    destinations in the future. Stay tuned for updates on our upcoming offerings!
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import M from 'materialize-css';

onMounted(() => {
    var elemsCollapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elemsCollapsible);
});
</script>

<style></style>