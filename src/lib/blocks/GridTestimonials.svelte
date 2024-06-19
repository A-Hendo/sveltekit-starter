<script lang="ts">
    import GridTestimonial from "$lib/components/GridTestimonial.svelte";

    const testimonials = [
        {
            name: "Maya Patel",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 1.7,
        },
        {
            name: "Ethan Rodriguez",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus.",
            rating: 5,
        },
        {
            name: "Olivia Bennett",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu.",
            rating: 4,
        },
        {
            name: "Liam Johnson",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante.  Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 3,
        },
        {
            name: "Sophia Lee",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae malesuada tellus, non ullamcorper purus. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 1,
        },
        {
            name: "Noah Miller",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac tempus arcu. Aliquam a augue ante.",
            rating: 1.2,
        },
        {
            name: "Ava Brown",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 2.1,
        },
        {
            name: "William Jones",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus.",
            rating: 3.8,
        },
        {
            name: "Mia Garcia",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 0,
        },
        {
            name: "James Davis",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 5,
        },
        {
            name: "Emily Wilson",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 3.2,
        },
        {
            name: "Matthew Hernandez",
            image: "",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget risus nec mauris elementum mollis ut interdum felis. Vivamus ac tempus arcu. Aliquam a augue ante. Donec vitae malesuada tellus, non ullamcorper purus. Ut elit nunc, blandit a consectetur eu, rutrum nec felis.",
            rating: 4.5,
        },
    ];

    function splitArray(arr) {
        const length = arr.length;
        const partSize = Math.ceil(length / 3);

        const part1 = arr.slice(0, partSize);
        const part2 = arr.slice(partSize, partSize * 2);
        const part3 = arr.slice(partSize * 2, length);

        return [part1, part2, part3];
    }

    const [columnOne, columnTwo, columnThree] = splitArray(testimonials);
</script>

<div class="min-w-screen min-h-screen flex items-center justify-center">
    <div
        class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800"
    >
        <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
                <h1
                    class="text-6xl md:text-7xl font-bold mb-5 text-primary-500"
                >
                    Testimonials
                </h1>
                <h3 class="my-6 whitespace-pre-line text-2xl">
                    What people are saying
                </h3>
                <!-- <div class="text-center mb-10">
                    <span
                        class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"
                    ></span>
                    <span
                        class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"
                    ></span>
                    <span
                        class="inline-block w-40 h-1 rounded-full bg-indigo-500"
                    ></span>
                    <span
                        class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"
                    ></span>
                    <span
                        class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"
                    ></span>
                </div> -->
            </div>
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                    {#each columnOne as testimonial}
                        <GridTestimonial
                            name="{testimonial.name}"
                            image="{testimonial.image}"
                            text="{testimonial.text}"
                            rating="{testimonial.rating}"
                        />
                    {/each}
                </div>
                <div class="px-3 md:w-1/3">
                    {#each columnTwo as testimonial}
                        <GridTestimonial
                            name="{testimonial.name}"
                            image="{testimonial.image}"
                            text="{testimonial.text}"
                            rating="{testimonial.rating}"
                        />
                    {/each}
                </div>
                <div class="px-3 md:w-1/3">
                    {#each columnThree as testimonial}
                        <GridTestimonial
                            name="{testimonial.name}"
                            image="{testimonial.image}"
                            text="{testimonial.text}"
                            rating="{testimonial.rating}"
                        />
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
