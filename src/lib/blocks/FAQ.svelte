<script lang="ts">
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
</script>

<div id="faq" class="py-16">
    <h2 class="text-3xl font-bold text-center my-10">
        Frequently Asked Questions
    </h2>
    <div class="flex justify-center">
        <Accordion
            autocollapse
            class="w-full sm:max-w-[70%] md:max-w-[70%] lg:max-w-[40%]"
        >
            <AccordionItem>
                <svelte:fragment slot="lead"></svelte:fragment>
                <svelte:fragment slot="summary"
                    >Nunc mattis enim ut tellus?</svelte:fragment
                >
                <svelte:fragment slot="content"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc mattis enim ut tellus. Auctor elit sed
                    vulputate mi. A erat nam at lectus urna duis convallis
                    convallis tellus. Nunc lobortis mattis aliquam faucibus
                    purus.</svelte:fragment
                >
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="lead"></svelte:fragment>
                <svelte:fragment slot="summary"
                    >Nunc mattis enim ut tellus?</svelte:fragment
                >
                <svelte:fragment slot="content"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc mattis enim ut tellus. Auctor elit sed
                    vulputate mi. A erat nam at lectus urna duis convallis
                    convallis tellus. Nunc lobortis mattis aliquam faucibus
                    purus.
                </svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="lead"></svelte:fragment>
                <svelte:fragment slot="summary"
                    >Nunc mattis enim ut tellus?</svelte:fragment
                >
                <svelte:fragment slot="content"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc mattis enim ut tellus. Auctor elit sed
                    vulputate mi. A erat nam at lectus urna duis convallis
                    convallis tellus. Nunc lobortis mattis aliquam faucibus
                    purus.
                </svelte:fragment>
            </AccordionItem>
            <AccordionItem>
                <svelte:fragment slot="lead"></svelte:fragment>
                <svelte:fragment slot="summary"
                    >Nunc mattis enim ut tellus?</svelte:fragment
                >
                <svelte:fragment slot="content"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nunc mattis enim ut tellus. Auctor elit sed
                    vulputate mi. A erat nam at lectus urna duis convallis
                    convallis tellus. Nunc lobortis mattis aliquam faucibus
                    purus.
                </svelte:fragment>
            </AccordionItem>
        </Accordion>
    </div>
</div>
