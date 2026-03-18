<template>
  <div class="page-root p-12 selection:bg-purple-500 selection:text-white">
    <!-- Background Elements -->
    <div class="space-container">
      <div class="starfield" />
      <div class="warp-tunnel" />
      <div class="mandala-wrap">
        <svg viewBox="0 0 200 200" class="mandala-svg" xmlns="http://www.w3.org/2000/svg">
          <g class="layer-rotate">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="var(--cs-purple)"
              class="layer-pulse"
              stroke-dasharray="0.5 2"
            />
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke="#6F83F2"
              stroke-width="0.05"
            />
            <path
              v-for="deg in mandalaPetals"
              :key="deg"
              d="M100 10 L110 30 L90 30 Z"
              fill="var(--cs-purple)"
              opacity="0.1"
              :transform="`rotate(${deg} 100 100)`"
            />
          </g>
          <g class="layer-rotate-slow">
            <rect
              x="60"
              y="60"
              width="80"
              height="80"
              fill="none"
              stroke="#49A466"
              stroke-width="0.1"
              opacity="0.2"
              transform="rotate(45 100 100)"
            />
            <rect
              x="60"
              y="60"
              width="80"
              height="80"
              fill="none"
              stroke="var(--cs-purple)"
              stroke-width="0.1"
              opacity="0.2"
              transform="rotate(15 100 100)"
            />
            <circle
              cx="100"
              cy="100"
              r="45"
              fill="none"
              stroke="#6F83F2"
              stroke-width="0.05"
              stroke-dasharray="1 1"
            />
          </g>
        </svg>
      </div>
    </div>

    <div class="h-12" />

    <main
      class="relative flex flex-col items-center text-center justify-center flex-1 max-w-4xl w-full"
    >
      <div class="mb-8 relative group">
        <div
          class="absolute -inset-16 bg-[#AC75FF]/20 blur-[60px] rounded-full opacity-50"
        />
        <span
          class="material-symbols-outlined text-[160px] md:text-[200px] text-[#AC75FF] rocket-float select-none cursor-default"
          style="font-variation-settings: 'FILL' 1, 'wght' 200"
        >
          rocket_launch
        </span>
      </div>

      <div class="space-y-6">
        <div
          class="inline-flex items-center gap-3 glass px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase text-[#AC75FF]"
        >
          <span class="relative flex h-2 w-2">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
            />
            <span class="relative inline-flex rounded-full h-2 h-2 bg-purple-500" />
          </span>
          Deployment Successful
        </div>
        <h1 class="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
          Hello <span class="text-gradient">Composable.</span>
        </h1>
        <p
          class="text-gray-400 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-light opacity-90"
        >
          You are witnessing the future of high-performance frontend hosting.
          <br class="hidden md:block" />
          Crafted for speed. Powered by
          <span class="text-white font-medium">Contentstack Launch.</span>
        </p>
      </div>

      <div class="mt-14 flex flex-col sm:flex-row items-center gap-6">
        <a
          href="https://www.contentstack.com/docs/developers/apis/launch-api"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto px-10 py-4 bg-black/40 text-white border border-[#AC75FF]/40 rounded-xl font-bold text-sm hover:bg-[#AC75FF] hover:text-black hover:scale-105 hover:border-transparent active:scale-95 transition-all duration-300 shadow-2xl backdrop-blur-md no-underline text-center"
        >
          Launch API
        </a>
        <a
          href="https://www.contentstack.com/docs/developers/launch"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto px-10 py-4 bg-black/40 text-white border border-[#AC75FF]/40 rounded-xl font-bold text-sm hover:bg-[#AC75FF] hover:text-black hover:scale-105 hover:border-transparent active:scale-95 transition-all duration-300 shadow-2xl backdrop-blur-md no-underline text-center"
        >
          Launch Docs
        </a>
      </div>
    </main>

    <footer class="w-full flex justify-center pb-12 pt-16">
      <a
        href="https://www.contentstack.com"
        target="_blank"
        rel="noopener noreferrer"
        class="glass rounded-full px-8 py-3.5 flex items-center gap-4 transition-all duration-500 hover:bg-white/10 hover:border-white/20 group no-underline"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 26 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="transition-transform group-hover:scale-110"
        >
          <path
            d="M25.5 13.342v5.314l-12.526 1.772L.5 18.656v-5.314l12.474-1.773L25.5 13.342z"
            fill="url(#footer_logo_grad)"
          />
          <path
            d="M.5 25.742v-5.314l7.292 3.986L25.5 20.428v5.314L7.792 31.5.5 25.742z"
            fill="url(#footer_logo_grad)"
          />
          <path
            d="M25.5 6.258v5.314l-7.292-3.986L.5 11.572V6.258L18.208.5 25.5 6.258z"
            fill="url(#footer_logo_grad)"
          />
          <defs>
            <linearGradient
              id="footer_logo_grad"
              x1="-1.723"
              y1="-0.742"
              x2="37.211"
              y2="20.356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#49A466" />
              <stop offset="0.5" stop-color="#6F83F2" />
              <stop offset="1" stop-color="#8A3DFF" />
            </linearGradient>
          </defs>
        </svg>
        <span
          class="font-bold text-lg tracking-tight text-white group-hover:text-[#AC75FF] transition-colors"
        >
          Contentstack
        </span>
        <div class="h-5 w-[1px] bg-white/20 mx-1" />
        <span
          class="text-[10px] font-mono opacity-100 uppercase tracking-[0.2em] text-white"
        >
          v1.0.4
        </span>
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
const mandalaPetals = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
</script>

<style scoped>
.page-root {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}
</style>
