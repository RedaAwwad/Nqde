<template>
   <div>
    <div class="bg-white px-3 pt-3">
      <div class="container">
        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4">
          <button @click="$router.push('/customers')" class="btn btn-sm d-flex align-items-center mb-3 mb-sm-0">
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
            
            <button v-b-modal.customer-info class="btn btn-primary btn-sm white-space-nowrap">
              تعديل العميل
            </button>
          </div>
        </div>

        <h2 class="pb-4">علي الاسمري</h2>
      </div>
    </div>
    <div class="container p-4">
      <div class="row mb-4">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="section">
            <h5 class="mb-5">الطلبات المغلقة</h5>
            <p class="mb-0 text-center">0</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="section">
            <h5 class="mb-5">اجمالي المدفوعات (SAR)</h5>
            <p class="mb-0 text-center">0</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="section">
            <h5 class="mb-5">اجمالي الخصومات (SAR)</h5>
            <p class="mb-0 text-center">0</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="section">
            <h5 class="mb-5">اخر طلب</h5>
            <p dir="ltr" class="mb-0 text-center">
              02/02/2022 05:30 م
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="section">
            <h5 class="mb-5">المنتج المفضل</h5>
            <p class="mb-0 text-center">-</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="section">
            <h5 class="mb-5">الفرع المفضل</h5>
            <p class="mb-0 text-center">-</p>
          </div>
        </div>
      </div>
      <div class="section mb-5 pb-2">
        <div class="row">
          <div class="col-md-6 col-lg-5">
            <h5 class="fw-semibold">الاسم</h5>
            <h6 class="mb-0">علي الاسمري</h6>
            <hr />
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-md-6 col-lg-5">
            <h5 class="fw-semibold">البريد الالكتروني</h5>
            <h6 class="mb-0">alialasmaree2022@gmail.com</h6>
            <hr />
          </div>
          <div class="col-md-6 col-lg-5">
            <h5 class="fw-semibold">الهاتف</h5>
            <h6 class="mb-0">+966504856384</h6>
            <hr />
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-md-6 col-lg-5">
            <h5 class="fw-semibold">برنامج الولاء</h5>
            <h6 class="mb-0">غير مفعل</h6>
            <hr />
          </div>
          <div class="col-md-6 col-lg-5">
            <h5 class="fw-semibold">الحسابات الاجله</h5>
            <h6 class="mb-0">غير مفعل</h6>
            <hr />
          </div>
          <div class="col-lg-2 d-none d-lg-block"></div>
          <div class="col-md-6 col-lg-5">
            <h5 class="fw-semibold">القائمه السوداء</h5>
            <h6 class="mb-0">لا</h6>
            <hr />
          </div>
        </div>
      </div>
      <!--  -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="fw-semibold">الوسوم</h4>
        <button class="btn btn-primary btn-sm">
          اضافة وسوم
        </button>
      </div>
      <div class="section mb-5">
        <p class="text-center">يمكنك إضافة وسم لهذا العميل لغرض التصفية و تعيين العروض الترويجية.</p>
        <div class="">
          <span class="flag-box d-inline-block">
            عميل مميز
          </span>
        </div>
      </div>
      <!--  -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="fw-semibold">العناوين</h4>
        <button class="btn btn-primary btn-sm white-space-nowrap">
          اضافة عنوان
        </button>
      </div>
      <div class="section mb-5">
        <p class="text-center">يمكنك إضافة عناوين هذا العميل و ربطها بمناطق التوصيل من أجل طلبات التوصيل.</p>
         <div class="row text-center">
          <div class="col-6 mb-3 mb-md-0 col-md-3">
            <h6 class="fw-semibold">الاسم</h6>
            <p class="mb-0">منزل العميل</p>
          </div>
          <div class="col-6 mb-3 mb-md-0 col-md-3">
            <h6 class="fw-semibold">الوصف</h6>
            <p class="mb-0">امام سوبر ماركت</p>
          </div>
          <div class="col-6 col-md-3">
            <h6 class="fw-semibold">منطقة التوصيل</h6>
            <p class="mb-0">_____</p>
          </div>
          <div class="col-6 col-md-3">
            <h6 class="fw-semibold">تم الانشاء</h6>
            <p class="mb-0">02/02/2022 04:00 ص</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="fw-semibold">الطلبات</h4>
        <button class="btn btn-primary btn-sm white-space-nowrap">
          اضافة طلب
        </button>
      </div>
      <div class="section mb-5">
        <p class="text-center">يمكنك مشاهدة جميع طلبات العميل ويمكنك اضافة طلب عبر كاشير الويب.</p>
        <div class="row text-center">
          <div class="col-6 mb-3 mb-md-0 col-md-3">
            <h6 class="fw-semibold">المنتج</h6>
            <p class="mb-0">برجر لحم</p>
          </div>
          <div class="col-6 mb-3 mb-md-0 col-md-3">
            <h6 class="fw-semibold">السعر</h6>
            <p class="mb-0">SAR 15</p>
          </div>
          <div class="col-6 col-md-3">
            <h6 class="fw-semibold">الفرع</h6>
            <p class="mb-0">فرع العوالي</p>
          </div>
          <div class="col-6 col-md-3">
            <h6 class="fw-semibold">تم الانشاء</h6>
            <p class="mb-0">02/02/2022 04:00 ص</p>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <h4 class="fw-semibold">معاملات الحساب الآجل</h4>
        <button class="btn btn-primary btn-sm white-space-nowrap">
          اضافة دفعة
        </button>
      </div>
      <div class="section mb-5">
        <p class="text-center">هنا يمكن إضافة دفعات للحساب الاجل والاطلاع على جميع عمليات الحساب بالاجل
والدفعات للحساب التي تمت بواسطة هذا العميل</p>
        <div class="row text-center">
          <div class="col-6 mb-3 mb-md-0 col-md-3">
            <h6 class="fw-semibold">النوع</h6>
            <p class="mb-0">دفعه للحساب</p>
          </div>
          <div class="col-6 mb-3 mb-md-0 col-md-3">
            <h6 class="fw-semibold">القيمه</h6>
            <p class="mb-0">SAR 15</p>
          </div>
          <div class="col-6 col-md-3">
            <h6 class="fw-semibold">المنشئ</h6>
            <p class="mb-0">Ali Salamah</p>
          </div>
          <div class="col-6 col-md-3">
            <h6 class="fw-semibold">التاريخ</h6>
            <p class="mb-0">02/02/2022 04:00 ص</p>
          </div>
        </div>
      </div>
    </div>

    
    <b-modal id="customer-info" title="تعديل بيانات العميل">
      <div class="my-4">
        <div class="form-group">
          <label>
            <span>الاسم <span class="text-danger">*</span></span>
            <span v-b-tooltip="'الاسم'" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
          <label>
            <span>الهاتف <span class="text-danger">*</span></span>
            <span v-b-tooltip="'الهاتف'" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
          <label>
            <span>البريد الالكتروني </span>
            <span v-b-tooltip="'البريد الالكتروني '" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
          <label>
            <span>تاريخ الميلاد</span>
            <span v-b-tooltip="'تاريخ الميلاد'" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
           <label>
            <span>الجنس</span>
            <span v-b-tooltip="'الجنس'" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-form-select v-model="gender" :options="[
            { value: 'male', text: 'ذكر' },
            { value: 'female', text: 'انثى' }]"></b-form-select>
        </div>
        <div class="form-group">
          <label>
            <span>حد الحساب الاجل</span>
            <span v-b-tooltip="'حد الحساب الاجل'" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-input-group dir="ltr" size="lg" prepend="SAR">
            <b-form-input value="500" disabled></b-form-input>
          </b-input-group>
        </div>
      </div>
      <template #modal-footer>
        <div class="w-100 d-flex align-items-center justify-content-between">
          <button class="btn text-danger">
            حذف العميل
          </button>
          <div>
            <b-button
              variant="outline-primary"
              @click="$bvModal.hide('customer-info')"
            >
              إغلاق
            </b-button>
            <b-button
              variant="primary"
            >
              تطبيق
            </b-button>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'CustomerPage',
  layout: 'dashboard',
  data() {
    return {
      gender: 'male'
    }
  }
}
</script>
