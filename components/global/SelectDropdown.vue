<template>
  <label class="select-dropdown">
    <div class="select-dropdown__title">
      <span>{{ title ? title : 'الاجراءات' }}</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg></span>
    </div>
    <input type="checkbox">
    <ul class="select-dropdown__menu">
      <li>إضافة وسوم</li>
      <li>مسح الوسوم</li>
      <li v-if="selectedItems && selectedItems.length === 1">
        <NuxtLink class="text-dark" :to="`/customers/${selectedItems[0].id}`">
          تعديل / مشاهدة
        </NuxtLink>
      </li>
      <li @click="$emit('deleteSelected')">حذف</li>
    </ul>
  </label>
</template>

<script>
export default {
  name: 'SelectDropdown',
  props: ['selectedItems', 'title']
}
</script>
