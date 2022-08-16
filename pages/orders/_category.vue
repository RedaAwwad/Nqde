<template>
  <div class="d-flex">
    <div @click="closeSidePanel" class="dashboard__side-panel__overlay" 
    :class="{ 'show' : isSidePanel }"></div>
    <SidePanel :class="{ 'show' : isSidePanel }">
      <div v-if="selectedOrder && selectedOrder.id" class="d-flex flex-column justify-content-between h-100">
        <div>
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
            <li v-for="(addition, index) in selectedOrder.additions" :key="index">
              <div class="addition d-flex align-items-center">
                <span class="white-space-nowrap">{{ addition.name }}</span>
                <Counter @update="updateAdditionCount($event, addition.id)"/>
                <span>=</span>
                <span>{{ addition.total }}</span>
              </div>
              <hr class="seperator" v-if="index !== (selectedOrder.additions.length - 1)"/>
            </li>
          </ul>
        </div>
        <div>
          <hr class="seperator" />
          <ul class="order-total">
            <li class="d-flex align-items-center justify-content-between mb-3 fw-semibold">
              <span>المجموع</span>
              <span>{{ netPrice }} ر.س</span>
            </li>
            <li class="d-flex align-items-center justify-content-between mb-3 fw-semibold">
              <span>الخصم</span>
              <span>0 ر.س</span>
            </li>
            <li class="d-flex align-items-center justify-content-between fw-semibold">
              <span>الضرائب</span>
              <span>{{ selectedOrder.details.tax }} ر.س</span>
            </li>
          </ul>
          <hr class="seperator" />
          <button v-b-modal.payment class="btn w-100 d-flex justify-content-between py-3 mb-3 btn-lg btn-primary-light">
            <span>الإجمالي</span>
            <span>{{ totalPrice }} ر.س</span>
          </button>
        </div>
      </div>
    </SidePanel>
    <div class="dashboard__content-grid">
      <div class="container p-4">
        <div class="section-header d-flex align-items-center mb-4">
          <button @click="backToMainOrdersPage" class="btn p-1 font-light hover-primary">
            رجوع
          </button>
          <h6 class="mb-0">اسم التصنيف</h6>
        </div>
        <div class="form-group search-form search-form--no-radius search-form--shadow mb-4">
          <input v-model.trim="keyword" type="text" class="form-control" placeholder="بحث المنتجات او الباركود">
        </div>
        <div v-if="loading" class="row">
          <div v-for="(order, index) in 4" :key="index" class="col-6 col-sm-3 col-md-4 col-lg-2 col-xl-3 col-2xl-2">
            <div class="category-card">
              <div class="category-card__icon p-0 mb-3 overflow-hidden">
                <b-skeleton class="mb-0" animation="wave" width="100%" height="100%"></b-skeleton>
              </div>
              <h5 class="category-card__title d-flex justify-content-center">
                <b-skeleton animation="wave" width="65%" height="15px"></b-skeleton>
              </h5>
            </div>
          </div>
        
        </div>
        <div v-else-if="filteredOrders && filteredOrders.length" class="row">
          <div v-for="(order, index) in filteredOrders" :key="index" class="col-6 col-sm-3 col-md-4 col-lg-2 col-xl-3 col-2xl-2">
            <div @click="displayOrderDetails(order)" class="category-card cursor-pointer">
              <div class="category-card__icon bg-white">
                <img :src="order.image" :alt="order.title">
              </div>
              <h5 class="category-card__title">
                {{ order.title }}
              </h5>
            </div>
          </div>
        </div>
        <div v-else-if="!loading && !filteredOrders.length" class="p-2">
          <p class="text-center">لا توجد نتائج</p>
        </div>
      </div>
    </div>

    <b-modal id="payment" title="الدفع">
      <div class="my-4">
        <div>
          <label>
            <span>المبلغ الإجمالي</span>
            <span v-b-tooltip="'المبلغ الإجمالي هو المبلغ النهائي الذي يجب دفعه'" v-b-tooltip.hover>
              <img width="15" src="/icons/icon-hint.svg" alt="hint">
            </span>
          </label>
          <b-input-group dir="ltr" size="lg" prepend="SAR">
            <b-form-input :value="totalPrice" disabled></b-form-input>
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
import { mapGetters } from "vuex";
import { orders } from '@/services';
 
export default {
  name: 'CategoryPage',
  layout: 'dashboard',
  data() {
    return {
      keyword: null,
      selectedOrder: {},
      loading: true,
      orders: [],
    }
  },
  computed: {
    ...mapGetters({
      isSidePanel: 'ui/isSidePanel'
    }),
    filteredOrders() {
      if(this.keyword) {
        return this.orders.filter(order => {
          return this.keyword.toLowerCase().split(' ').every(v => order.title.toLowerCase().includes(v))
        });
      }

      return orders;
    },
    netPrice() {
      if(this.selectedOrder?.id) {
        let { total } = this.selectedOrder.additions.reduce((prev, curr) => {
          return { total: (prev.total + curr.total) };
        });

        return total;
      }

      return 0;
    },
    totalPrice() {
      if(this.netPrice) {
        return (this.netPrice + this.selectedOrder.details.tax);
      }

      return 0;
    }
  },
  methods: {
    closeSidePanel() {
      this.$store.commit('ui/UPDATE_SIDEPANEL_STATUS', false);
    },
    getOrders() {
      setTimeout(() => {
        this.orders = orders;
        this.loading = false;
      }, 1000);
    },
    backToMainOrdersPage() {
      this.$store.commit('ui/UPDATE_SIDEPANEL_STATUS');

      if(this.selectedOrder.id) {
        this.selectedOrder = {};
        return;
      }

      this.$router.push('/orders');
    },
    displayOrderDetails(order) {
      this.selectedOrder = order;
      this.$store.commit('ui/UPDATE_SIDEPANEL_STATUS', true);
    },
    updateAdditionCount(count, additionID) {
      const updatedAdditions = this.selectedOrder.additions.map(add => {
        if(add.id === additionID) {
          add.qty = count;

          add.total = add.price * count;
        }

        return add;
      });

      this.orders = this.orders.map(order => {
        if(order.id === this.selectedOrder.id) {
          order.additions = updatedAdditions;
          this.selectedOrder.additions = updatedAdditions;
        }

        return order;
      });
    }
  },
  mounted() {
    this.getOrders();
  }
}
</script>
