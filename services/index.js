// categories data
export const categories = [
  {
    id: 1,
    title: 'ساخن',
    desc: '',
    image: '/icons/icon-hot.svg',
    slug: 'hot'
  },
  {
    id: 2,
    title: 'حلويات',
    desc: '',
    image: '/icons/icon-dessert.svg',
    slug: 'dessert'
  }
]

// additions data
const additions = (orderTitle) => [
  {
    id: 1,
    name: orderTitle,
    price: 20,
    total: 20,
    qty: 1
  },
  {
    id: 2,
    name: orderTitle,
    price: 15,
    total: 15,
    qty: 1
  },
  {
    id: 3,
    name: orderTitle,
    price: 20,
    total: 20,
    qty: 1
  },
  {
    id: 4,
    name: orderTitle,
    price: 10,
    total: 10,
    qty: 1
  },
  {
    id: 5,
    name: orderTitle,
    price: 5,
    total: 5,
    qty: 1
  },
  {
    id: 6,
    name: orderTitle,
    price: 20,
    total: 20,
    qty: 1
  },
]

// orders data
export const orders = [
  {
    id: 1,
    title: 'بان كيك',
    image: '/icons/icon-dessert.svg',
    details: {
      customer_name: ' اسم العميل',
      bill_number: '#54622',
      order_type: 'سفري',
      table_number: 8,
      net: 200,
      discount: 0,
      tax: 200,
      total: 400
    },
    additions: additions('بان كيك')
  },
  {
    id: 2,
    title: 'فرنش توست',
    image: '/icons/icon-dessert.svg',
    details: {
      customer_name: ' اسم العميل',
      bill_number: '#50022',
      order_type: 'سفري',
      table_number: 8,
      net: 250,
      discount: 0,
      tax: 210,
      total: 460
    },
    additions: additions('فرنش توست')
  },
  {
    id: 3,
    title: 'حلى عربي',
    image: '/icons/icon-dessert.svg',
    details: {
      customer_name: ' اسم العميل',
      bill_number: '#57722',
      order_type: 'سفري',
      table_number: 10,
      net: 150,
      discount: 0,
      tax: 50,
      total: 200
    },
    additions: additions('حلى عربي')
  }
]

// customers
export const customers = [
  { 
    id: 1,
    selected: false,
    name: "علي الاسمري",
    phone: "05993939399",
    email: "aliasmareeeeeeefj@gmail.com",
    total_orders: 2,
    last_order: "02/02/2022 05:00 م"
  },
  { 
    id: 2,
    selected: false,
    name: "محمد محمود",
    phone: "05993935559",
    email: "mohamed@gmail.com",
    total_orders: 1,
    last_order: "02/02/2022 05:00 م"
  }
]