<template>
   <div>
    <div class="bg-white px-3 pt-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <button @click="$router.push('/customers')" class="btn btn-sm d-flex align-items-center">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 15.291 25.709"><path d="M15.6,18.8l9.543-9.536A1.8,1.8,0,0,0,22.588,6.72l-10.812,10.8a1.8,1.8,0,0,0-.053,2.485L22.58,30.89a1.8,1.8,0,1,0,2.553-2.545Z" transform="translate(26.751 31.004) rotate(178)"/>
            </svg>
            </span>
            <span>رجوع</span>
          </button>
          <div class="d-flex gap">
            <div>
              <SelectDropdown class="lg" title="اجراءات اخرى" :selected-items="[{id: 1}]"/>
            </div>
            <button class="btn btn-primary btn-sm">
              تعديل العميل
            </button>
          </div>
        </div>

        <h2 class="pb-4">علي الاسمري</h2>
      </div>
    </div>
    <div class="container p-4">
      <div class="section">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerPage',
  layout: 'dashboard',
}
</script>
