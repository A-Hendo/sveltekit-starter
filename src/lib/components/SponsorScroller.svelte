<script lang="ts">
    import AutoScroll from "embla-carousel-auto-scroll";
    import emblaCarouselSvelte from "embla-carousel-svelte";

    const images = [
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
        {
            src: "./favicon.png",
            alt: "my logo",
        },
    ];

    let options = { loop: true };
    let plugins = [AutoScroll({ playOnInit: true })];
</script>

<div class="mx-auto max-w-screen-xl px-3 sm:px-5 lg:px-6 py-16">
    <div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}">
        <div class="embla__container">
            {#each images as image}
                <div class="embla__slide mx-1">
                    <img
                        class="embla__slide__number mx-1"
                        src="{image.src}"
                        alt="{image.alt}"
                        width="50"
                    />
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .embla {
        overflow: hidden;
    }
    .embla__container {
        display: flex;
    }
    .embla__slide {
        flex: 0 0 20%;
        min-width: 0;
    }
</style>
