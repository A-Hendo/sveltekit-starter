<script>
    import { Facebook, Instagram, Linkedin, Twitter } from "lucide-svelte";
</script>

<footer>
    <div class="mx-auto max-w-screen-xl px-3 sm:px-5 lg:px-6 py-10">
        <div
            class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-5"
        >
            <div class="text-center sm:text-left">
                <span class="font-semibold">Press</span>
                <nav class="grid grid-flow-row">
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                </nav>
            </div>
            <div class="text-center sm:text-left">
                <span class="font-semibold">Contact</span>
                <nav class="grid grid-flow-row">
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                </nav>
            </div>
            <div class="text-center sm:text-left">
                <span class="font-semibold">Legal</span>
                <nav class="grid grid-flow-row">
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                </nav>
            </div>
            <div class="text-center sm:text-left">
                <span class="font-semibold">Header</span>
                <nav class="grid grid-flow-row">
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                </nav>
            </div>
            <div class="text-center sm:text-left">
                <span class="font-semibold">Header</span>
                <nav class="grid grid-flow-row">
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                    <a href="/">New link</a>
                </nav>
            </div>
        </div>
    </div>
    <hr class="opacity-50" />
    <div class="mx-auto max-w-screen-xl px-3 sm:px-2 lg:px-3">
        <div
            class="flex lg:justify-between md:justify-between justify-center mt-4 flex-wrap"
        >
            <div class="flex-col py-4">
                <div class="flex gap-5">
                    <a class="btn-link" href="/"><Linkedin /></a>
                    <a class="btn-link" href="/"><Facebook /></a>
                    <a class="btn-link" href="/"><Twitter /></a>
                    <a class="btn-link" href="/"><Instagram /></a>
                </div>
            </div>
            <div class="flex-col py-4">
                © Copyright 2024 NAME. All Rights Reserved.
            </div>
            <div />
        </div>
    </div>
</footer>
