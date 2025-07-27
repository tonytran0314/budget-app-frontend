<script setup>
    import { HomeIcon, WalletIcon } from 'lucide-vue-next'
</script>

<template>
    <div class="w-64 h-screen bg-slate-800 px-4 py-8">
        <h1 class="text-2xl font-bold text-white">Budget App</h1>

        <div class="flex flex-col gap-2 mt-8">
            <span class="text-sm text-gray-400">Navigation</span>

            <div class="flex flex-col gap-1">
                
                <router-link to="/" class="flex items-center gap-2 p-2 rounded-md hover:bg-rose-600 text-white">
                    <HomeIcon />
                    <span>Dashboard</span>
                </router-link>
                <router-link to="/transactions" class="flex items-center gap-2 p-2 rounded-md hover:bg-rose-600 text-white">
                    <WalletIcon />
                    <span>Transactions</span>
                </router-link>
            </div>
        </div>
    </div>
</template>