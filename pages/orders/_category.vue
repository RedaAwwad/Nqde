<template>
  <div class="d-flex">
    <SidePanel>
      <transition name="page">
        <div v-if="selectedOrder && selectedOrder.id">
          <ul class="d-flex flex-column gap">
            <li>
              <h6>
                <span>اضافة العميل / </span>
                <span>{{ selectedOrder.details.customer_name }}</span>
              </h6>
            </li>
            <li>
              <span>رقم الفاتورة:</span>
              <span dir="ltr">{{ selectedOrder.details.bill_number }}</span>
            </li>
            <li>
              <span>نوع الطلب:</span>
              <span>{{ selectedOrder.details.order_type }}</span>
            </li>
            <li>
              <span>رقم الطاولة:</span>
              <span dir="ltr">{{ selectedOrder.details.table_number }}</span>
            </li>
          </ul>
          <hr class="seperator" />
          <ul class="order-additions">
            <li v-for="(addition, index) in additions" :key="index">
              <div class="addition d-flex align-items-center">
                <span>{{ addition.name }}</span>
                <Counter @update="updateAdditionCount($event, addition.id)"/>
                <span>=</span>
                <span>{{ addition.total }}</span>
              </div>
              <hr class="seperator" />
            </li>
          </ul>
          <ul class="order-total">
            <li class="d-flex align-items-center justify-content-between mb-3 fw-semibold">
              <span>المجموع</span>
              <span>200 ر.س</span>
            </li>
            <li class="d-flex align-items-center justify-content-between mb-3 fw-semibold">
              <span>الخصم</span>
              <span>0 ر.س</span>
            </li>
            <li class="d-flex align-items-center justify-content-between fw-semibold">
              <span>الضرائب</span>
              <span>200 ر.س</span>
            </li>
          </ul>
          <hr class="seperator" />
          <button v-b-modal.payment class="btn w-100 d-flex justify-content-between btn-lg btn-primary">
            <span>الإجمالي</span>
            <span>400 ر.س</span>
          </button>
        </div>
      </transition>
    </SidePanel>
    <div class="dashboard__content-grid">
      <div class="container p-4">
        <div class="section-header d-flex align-items-center mb-4">
          <button @click="backToMainOrdersPage" class="btn p-1 hover-primary">
            رجوع
          </button>
          <h6 class="mb-0">اسم التصنيف</h6>
        </div>
        <div class="form-group search-form search-form--no-radius search-form--shadow mb-4">
          <input v-model.trim="keyword" type="text" class="form-control" placeholder="بحث المنتجات او الباركود">
        </div>
        <div class="row">
          <div v-for="(order, index) in filteredOrders" :key="index" class="col-md-4 col-xl-3">
            <div @click="displayOrderDetails(order)" class="category-card cursor-pointer">
              <div class="category-card__icon" :class="[order.id == selectedOrder.id ? 'bg-gray' : 'bg-white']">
                <img :src="order.image" :alt="order.title">
              </div>
              <h5 class="category-card__title">
                {{ order.title }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="payment" title="الدفع">
      <div class="my-4">
        <div dir="ltr">
          <b-input-group size="lg" prepend="SAR">
            <b-form-input v-model="payment"></b-form-input>
          </b-input-group>
        </div>
      </div>
      <template #modal-footer>
        <div class="w-100 d-flex align-items-center justify-content-end">
          <b-button
            variant="outline-primary"
            @click="$bvModal.hide('payment')"
          >
            إغلاق
          </b-button>
          <b-button
            variant="primary"
          >
            دفع
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { orders, additions } from '@/services';
 
export default {
  name: 'CategoryPage',
  layout: 'dashboard',
  data() {
    return {
      keyword: null,
      selectedOrder: {},
      additions,
      payment: 500
    }
  },
  computed: {
    filteredOrders() {
      if(this.keyword) {
        return orders.filter(order => {
          return this.keyword.toLowerCase().split(' ').every(v => order.title.toLowerCase().includes(v))
        });
      }

      return orders;
    }
  },
  methods: {
    backToMainOrdersPage() {
      if(this.selectedOrder) {
        this.selectedOrder = {};
        return;
      }

      this.$router.push('/orders');
    },
    displayOrderDetails(order) {
      this.selectedOrder = order;
    },
    updateAdditionCount(count, additionID) {
      const updatedAdditions = this.additions.map(add => {
        if(add.id === additionID) {
          add.qty = count;

          add.total = add.price * count;
        }

        return add;
      });

      this.additions = updatedAdditions
    }
  }
}
</script>
