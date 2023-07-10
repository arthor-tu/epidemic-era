<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import eventsData from '@/config/data/events'

const active_index = ref(0) // 当前高亮事件
const scroll_lock = ref(false) // 滚动锁
const active_event = computed(() => eventsData[active_index.value])

const SHOW_NUM = 5
const TRANSFORM_VAL = 5

onMounted(() => {
  const sidebarDom = document.getElementById('events-sidebar')
  sidebarDom.addEventListener('wheel', on_sidebar_scroll)
  setInterval(scroll_sidebar_interval, 5000)
})

const lock_timer = ref(null)
/**
 * 锁住自动滚动
 */
const lock_sidebar_auto = () => {
  // 滚动时锁住自动滚动
  scroll_lock.value = true
  if (lock_timer.value) {
    clearTimeout(lock_timer)
  }

  lock_timer.value = setTimeout(() => {
    scroll_lock.value = false
    lock_timer.value = null
  }, 5000)
}
/**
 * 定时滚动
 */
const scroll_sidebar_interval = () => {
  if (scroll_lock.value) {
    // 锁
    return
  }
  active_index_plus(1)
}

/**
 * 当前活跃向下滚动
 */
const active_index_plus = (val = 1) => {
  if (val > 0) {
    if (active_index.value >= eventsData.length - 1) {
      active_index.value = 0
    } else {
      active_index.value += val
    }
  } else if (val < 0) {
    if (active_index.value <= 0) {
      active_index.value = eventsData.length - 1
    } else {
      active_index.value += val
    }
  }
}

/**
 * 重置活跃值
 */
const reset_active_index = () => {
  active_index.value = 0
}

const onClickEvent = (index) => {
  active_index.value = index
}
/**
 * sidebar 鼠标滚动事件
 */
const on_sidebar_scroll = (event) => {
  lock_sidebar_auto()
  if (event.deltaY > 0) {
    active_index_plus()
  } else {
    active_index_plus(-1)
  }
}
</script>

<template>
  <!-- <p>My Test Text</p>
  <p>value = {{ active_index }}</p>
  <p v-for="item in eventsData" :key="item.title">{{ item.title }}</p> -->
  <div class="main-wrapper">
    <div class="events-wrapper">
      <div id="events-sidebar" class="events-sidebar">
        <div
          :class="`event-item trans-val${index - active_index}`"
          v-for="(item, index) in eventsData"
          :key="item.title"
          v-show="Math.abs(index - active_index) < SHOW_NUM * 2"
          :style="{
            transform: `translateY(${(index - active_index) * TRANSFORM_VAL}rem)`,
            opacity: Math.abs(index - active_index) > SHOW_NUM - 3 ? 0 : 1
          }"
          @click="onClickEvent(index)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="events-divider"></div>
      <div class="events-content">
        <h3>{{ active_event.title }}</h3>
        <p>{{ active_event.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  overflow: hidden;
}
.events-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 100%;
  /* background: rgba(90, 90, 90, 0.1); */
  margin: auto 0;
}
.events-wrapper .events-sidebar {
  display: flex;
  height: 100%;
  width: 460px;
  padding: 1rem;
  position: relative;
  /* justify-content: center;
  flex-direction: column; */
  /* background: rgba(90, 90, 90, 0.1); */
  overflow: visible;
}
.events-divider {
  height: 100%;
  width: 1px;
  background: #909090;
  margin: 0 1rem;
}
.events-sidebar .event-item {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 300ms;
  font-size: 16px;
}
.events-wrapper .events-content {
  flex: 1;
  height: 100%;
}
.event-item.trans-val0 {
  font-weight: bolder;
  font-size: large;
  transform: translateY(0);
}
/* .event-item.trans-val1 {
  transform: translateY(4rem);
}
.event-item.trans-val-1 {
  transform: translateY(-4rem);
}
.event-item.trans-val2 {
  transform: translateY(8rem);
  opacity: 0.5;
}
.event-item.trans-val-2 {
  transform: translateY(-8rem);
  opacity: 0.5;
}
.event-item.trans-val3 {
  transform: translateY(12rem);
  opacity: 0;
}
.event-item.trans-val-3 {
  transform: translateY(-12rem);
  opacity: 0;
}
.event-item.trans-val4 {
  transform: translateY(16rem);
  opacity: 0;
}
.event-item.trans-val-4 {
  transform: translateY(-16rem);
  opacity: 0;
} */
</style>
