<template>
  <div class="works__container">
    <MagicCard
      class="works__item"
      v-for="(item, index) in data"
      :key="index"
      @click="() => jumpLink(item.link)"
    >
      <h4>{{ item.title }}</h4>
      <p>{{ item.desc }}</p>
    </MagicCard>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    title: 'Theo-Docs',
    desc: '流媒体森林 - 全方位流媒体 观影指南 引领您进入五彩斑斓的视听世界...',
    link: 'https://doc.theovan.cn/'
  },
  {
    title: '玄学宝典',
    desc: '玄学宝典 - 中华传统五术书籍(山医命相卜)/传世经典著作',
    link: 'https://xx.theovan.cn/'
  },
  {
    title: '阿里云盘资源分享',
    desc: '阿里云盘资源分享 - 热门资源/电视剧/电影/综艺/动漫/大陆/日本/韩国/欧美',
    link: 'https://share.theovan.cn/'
  },
  {
    title: 'Tencent-cos-sync',
    desc: "regularly synchronize tencent cloud cos to this warehouse.",
    link: 'https://github.com/Theo-messi/Tencent-cos-sync'
  },
  {
    title: 'dotfiles',
    desc: "常用的配置文件",
    link: 'https://github.com/Theo-messi/dotfiles'
  },
]

const jumpLink = (link?: string) => {
  if (link) {
    window.open(link, '_blank')
  }
}
</script>

<style scoped>
.works__container {
  @apply grid grid-cols-1 gap-4 max-w-screen-lg mx-auto my-16 px-6 md:grid-cols-3;
}

.works__item {
  @apply relative py-4 px-6 cursor-pointer overflow-hidden;
}

.works__item h4 {
  @apply mt-0 mb-0 pt-0;
}

.works__item p {
  @apply my-4 text-gray-400; /* A lighter shade of white */
}

.works__item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid transparent;
  background: linear-gradient(45deg, rgba(96, 103, 228, 1), rgba(225, 72, 85, 1)) border-box;
  -webkit-mask: 
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.works__item:hover::before {
  opacity: 1;
}
</style>
