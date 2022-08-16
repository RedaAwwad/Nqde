<template>
  <div>
    <div class="bg-white px-3 pt-3">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h4 class="fw-semibold mb-0">العملاء</h4>
          <div class="d-flex gap">
            <button class="btn btn-primary btn-sm d-flex align-items-center">
              <span>استيراد / تصدير</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg></span>
            </button>
            <button class="btn btn-primary btn-sm">
              اضافة عميل
            </button>
          </div>
        </div>

        <ul class="customer-filters d-flex align-items-center gap">
          <li @click="selectedFilter = 'all'" :class="[selectedFilter == 'all' ? 'active' : '']" class="cursor-pointer">الكل</li>
          <li @click="selectedFilter = 'has-orders'" :class="[selectedFilter == 'has-orders' ? 'active' : '']" class="cursor-pointer">لديه طلبات</li>
          <li @click="selectedFilter = 'blocked'" :class="[selectedFilter == 'blocked' ? 'active' : '']" class="cursor-pointer">في القائمة السوداء</li>
          <li @click="selectedFilter = 'deleted'" :class="[selectedFilter == 'deleted' ? 'active' : '']" class="cursor-pointer">محذوف</li>
        </ul>
      </div>
    </div>
    <div class="container p-4">
      <div class="d-flex align-items-center justify-content-end mb-4">
        <div class="d-flex gap">
          <button @click="updateTable" class="btn btn-light btn-sm shadow px-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" viewBox="0 0 35.955 36">
              <path d="M18,0A18,18,0,1,0,30.78,30.78l-3.24-3.24A13.51,13.51,0,1,1,17.955,4.5a13.091,13.091,0,0,1,9.4,4.095L22.455,13.5h13.5V0L30.6,5.355A17.9,17.9,0,0,0,17.955,0Z"/>
            </svg>
          </button>
          
          <button v-b-modal.filter class="btn btn-light btn-sm d-flex align-items-center shadow">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.1rem" height="1.1rem" viewBox="0 0 25.95 25.95"><path d="M24.733,0H1.218a1.217,1.217,0,0,0-.86,2.077l9.374,9.375V21.9a1.217,1.217,0,0,0,.519,1L14.3,25.729a1.217,1.217,0,0,0,1.914-1V11.452l9.374-9.375A1.217,1.217,0,0,0,24.733,0Z"/>
            </svg>
            </span>
            <span>تصفيه</span>
          </button>
        </div>
      </div>
      <div class="table__container">
          <div v-if="selectedCustomers.length" class="table__actions">
            <span class="fw-semibold">محدد {{ selectedCustomers.length }}</span>
            <div>
              <SelectDropdown :selected-items="selectedCustomers"
              @deleteSelected="deleteSelected"/>
            </div>
          </div>
        <b-table
        ref="customersTable"
          sticky-header
          select-mode="multi"
          responsive
          selectable
          :items="customers"
          :fields="fields"
          @row-selected="onRowSelected"
        >
          <!-- hide id column -->
          <template #head(id)="scope"><span></span></template>
          <template #cell(id)="scope"><span></span></template>

          <!-- last order -->
          <template #cell(last_order)="scope">
            <div dir="ltr">{{ scope.value }}</div>
          </template>

          <!-- selected checkbox -->
          <template #head(selected)="scope">
            <div class="d-flex justify-content-center">
              <label class="checkbox">
                <input @change="selectAllCustomers($event.target.checked, scope)" type="checkbox" :checked="selectedCustomers.length === customers.length">
              </label>
            </div>
          </template>
          <template #cell(selected)="{ rowSelected, index }">
            <div class="d-flex justify-content-center">
              <label class="checkbox">
                <input @change="selectCustomer($event.target.checked, index)" type="checkbox" :checked="rowSelected">
              </label>
            </div>
          </template>
          <!-- <template #head()="scope">
            <div class="text-nowrap">
              Heading {{ scope.label }}
            </div>
          </template> -->
        </b-table>
      </div>
    </div>

    <b-modal id="filter" title="تصفيه">
      <div class="my-4">
        <div class="form-group">
          <label>
            الاسم
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
          <label>
            الهاتف
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
          <label>
            البريد الالكتروني
          </label>
          <b-form-input ></b-form-input>
        </div>
        <div class="form-group">
          <label>
            الوسوم
          </label>
          <b-form-select v-model="selected" :options="[
            { value: null, text: 'اختر' },
            { value: '1', text: 'وسم 1' },
            { value: '2', text: 'وسم 2' }]"></b-form-select>
        </div>
        <div class="form-group">
          <label>
            لديه طلبات
          </label>
          <b-form-select v-model="selected" :options="[
            { value: null, text: 'نعم / لا' },
            { value: 'yes', text: 'نعم' },
            { value: 'no', text: 'لا' }]"></b-form-select>
        </div>
        <div class="form-group">
          <label>
            في القائمه السوداء
          </label>
            <b-form-select v-model="selected" :options="[
            { value: null, text: 'نعم / لا' },
            { value: 'yes', text: 'نعم' },
            { value: 'no', text: 'لا' }]"></b-form-select>
        </div>
        <div class="form-group">
          <label>
            الحساب الاجل مفعل
          </label>
         <b-form-select v-model="selected" :options="[
            { value: null, text: 'نعم / لا' },
            { value: 'yes', text: 'نعم' },
            { value: 'no', text: 'لا' }]"></b-form-select>
        </div>
        <div class="form-group">
          <label>
            محذوف
          </label>
          <b-form-select v-model="selected" :options="[
            { value: null, text: 'نعم / لا' },
            { value: 'yes', text: 'نعم' },
            { value: 'no', text: 'لا' }]"></b-form-select>
        </div>
        <div class="form-group">
          <label>
            تم تحديثه بعد
          </label>
          <b-form-datepicker id="datepicker-placeholder" placeholder="تاريخ" locale="ar"></b-form-datepicker>
        </div>
      </div>
      <template #modal-footer>
        <div class="w-100 d-flex align-items-center justify-content-end">
          <button class="btn">
            اعادة الضبط
          </button>
          <b-button
            variant="outline-primary"
            @click="$bvModal.hide('filter')"
          >
            إغلاق
          </b-button>
          <b-button
            variant="primary"
          >
            تطبيق
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { customers } from '@/services';
import moment from "moment";

export default {
  name: "CustomersPage",
  layout: "dashboard",
  data() {
      return {
          customers,
          selected: null,
          fields: [
              { key: "selected" },
              { key: "id", label: "ID", isActive: false },
              { key: "name", label: "الاسم" },
              { key: "phone", label: "الهاتف" },
              { key: "email", label: "البريد الالكتروني" },
              { key: "total_orders", label: "اجمالي الطلبات" },
              { key: "last_order", label: "اخر طلب" },
          ],
          selectedCustomers: [],
          selectedFilter: 'all'
      };
  },
  methods: {
    updateTable() {
      this.customers = customers;

      this.selectAllCustomers(false);
    },
    deleteSelected() {
      const confirmed = window.confirm('هل تريد حذف العملاء المحددين بالفعل؟');
      if(confirmed) {
        const selectedCustomers = this.selectedCustomers.map(c => c.id);
        this.customers = this.customers.filter(c => !selectedCustomers.includes(c.id));

        this.selectedCustomers = [];
      }
    },
    selectAllCustomers(checked) {
        this.$refs.customersTable.selectAllRows();
        if (checked) {
            this.$refs.customersTable.selectAllRows();
            return;
        }
        this.$refs.customersTable.clearSelected();
    },
    selectCustomer(checked, index) {
        if (checked) {
            this.$refs.customersTable.selectRow(index);
            return;
        }
        this.$refs.customersTable.unselectRow(index);
    },
    unselectCustomer(index) {
        console.log(index);
        this.$refs.customersTable.unselectRow(index);
    },
    onRowSelected(items) {
        this.selectedCustomers = items;
    },
    goToCustomerDetails(row, cell, name, index) {
        console.log(row, cell, name);
        if (name !== "select") {
            this.$router.push(`/customers/${row.id}`);
        }
    }
  },
}
</script>
