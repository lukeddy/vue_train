<template>
  <div class="container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">客户列表</h1>
    <input class="form-control" placeholder="输入姓氏过滤" v-model="filterInput">
    <br />
    <table class="table table-striped">
        <thead>
          <tr>
            <th>姓氏</th>
            <th>名字</th>
            <th>邮箱</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-bind:key="mykey" v-for="(customer,mykey) in filterBy(customers, filterInput)">
            <td>{{customer.last_name}}</td>
            <td>{{customer.first_name}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/customer/'+customer.id">查看</router-link></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'customers',
  data () {
    return {
      customers: [],
      alert: '',
      filterInput: ''
    }
  },
  methods: {
    fetchCustomers () {
      this.$http.get('http://115.28.23.215:8081/api/customers')
        .then(function (response) {
          this.customers = response.body
        })
    },
    filterBy (list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
      return list.filter(function (customer) {
        return customer.last_name.indexOf(value) > -1
      })
    }
  },
  created: function () {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  },
  updated: function () {
    this.fetchCustomers()
  },
  components: {
    Alert
  }
}
</script>
