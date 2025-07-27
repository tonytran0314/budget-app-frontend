<script setup>
    import Menu from '@/components/partials/Menu.vue'
    import { PlusIcon, ArrowUpIcon, ArrowDownIcon } from 'lucide-vue-next'  

    import { AreaChart } from '@/components/ui/chart-area'

    const data = [
    { name: 'Jan', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Feb', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Mar', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Apr', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'May', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jun', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    { name: 'Jul', total: Math.floor(Math.random() * 2000) + 500, predicted: Math.floor(Math.random() * 2000) + 500 },
    ]
</script>

<template>
    <div class="flex">
        <!-- Menu -->
        <Menu />

        <!-- Content -->
        <div class="p-8 bg-slate-900 flex-1 flex flex-col gap-8">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold text-white">Dashboard</h1>
                
                <div>
                    <button class="bg-rose-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
                        <PlusIcon />
                        <span>Add Transaction</span>
                    </button>
                </div>
            </div>

            <!-- Body -->
            <div class="flex flex-col gap-4">

                <!-- Balance -->
                <div class="flex gap-4">
                    <div class="bg-rose-600 text-white px-6 py-4 rounded-md flex-1 flex flex-col gap-4">
                        <p class="font-bold">Gia Huy</p>
                        <div class="text-4xl font-bold flex items-center">
                            <span>$</span>
                            <span>1,000.00</span>
                        </div>
                    </div>
                    <div class="bg-slate-800 text-white px-6 py-4 rounded-md flex-1 flex flex-col gap-4">
                        <p class="font-bold">Mẹ</p>
                        <div class="text-3xl font-bold flex items-center">
                            <span>$</span>
                            <span>1,000.00</span>
                        </div>
                    </div>
                    <div class="bg-slate-800 text-white px-6 py-4 rounded-md flex-1 flex flex-col gap-4">
                        <p class="font-bold">Tổng cộng</p>
                        <div class="text-3xl font-bold flex items-center">
                            <span>$</span>
                            <span>1,000.00</span>
                        </div>
                    </div>
                </div>

                <!-- Graph and Recent Transactions -->
                <div class="flex gap-4">
                    <div class="bg-slate-800 text-white rounded-md flex-1">

                        <div class="pt-4 px-6">
                            <p class="font-bold">Thu/chi theo thời gian</p>
                        </div>
                        <AreaChart :data="data" :colors="['#e11d48']" index="name" :categories="['total']" :show-legend="false" :showGridLine="false" :margin="{ left: 0, right: 20 }" />
                    </div>
                    <div class="bg-slate-800 text-white py-4 px-6 rounded-md flex-1">
                        <div class="flex justify-between items-center">
                            <p class="font-bold">Recent Transactions</p>
                            <button class="text-rose-500 underline hover:text-rose-300 px-4 py-2 rounded-md flex items-center gap-2">View All</button>
                        </div>

                        <div class="flex flex-col gap-4 mt-4">
                            <div class="flex justify-between items-center py-2 border-b border-slate-700">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                                        <ArrowUpIcon class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="font-medium">Tiền ăn</p>
                                        <p class="text-sm text-gray-400">Hôm nay, 12:00</p>
                                    </div>
                                </div>
                                <p class="text-rose-500">-$50.00</p>
                            </div>

                            <div class="flex justify-between items-center py-2 border-b border-slate-700">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                        <ArrowDownIcon class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="font-medium">Lương</p>
                                        <p class="text-sm text-gray-400">Hôm qua, 15:30</p>
                                    </div>
                                </div>
                                <p class="text-green-500">+$1,000.00</p>
                            </div>

                            <div class="flex justify-between items-center py-2 border-b border-slate-700">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                                        <ArrowUpIcon class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="font-medium">Mua sắm</p>
                                        <p class="text-sm text-gray-400">20/11/2023, 18:45</p>
                                    </div>
                                </div>
                                <p class="text-rose-500">-$120.00</p>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-slate-700">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                                        <ArrowUpIcon class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="font-medium">Mua sắm</p>
                                        <p class="text-sm text-gray-400">20/11/2023, 18:45</p>
                                    </div>
                                </div>
                                <p class="text-rose-500">-$120.00</p>
                            </div>
                            <div class="flex justify-between items-center py-2 border-b border-slate-700">
                                <div class="flex items-center gap-2">
                                    <div class="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                                        <ArrowUpIcon class="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p class="font-medium">Mua sắm</p>
                                        <p class="text-sm text-gray-400">20/11/2023, 18:45</p>
                                    </div>
                                </div>
                                <p class="text-rose-500">-$120.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>